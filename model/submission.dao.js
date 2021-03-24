var mongoose = require('mongoose');
// import quiz schema 
var submissionSchema = require('./submission');

submissionSchema.statics = {
    // save submission
    create: function(data, cb) {
        var submission = new this(data);
        submission.save(cb);
    },

    // get all submissions by quiz id
    getAll: function(quizID, cb) {
        this.find(quizID, cb);
    },

    // get submission by submission id
    getByID: function(id, cb) {
        this.findById(id, cb);
    },

    // delete submission by sub id
    delete: function(subID, cb) {
        this.findByIdAndDelete(subID, cb);
    }, 

    // delete all submissions by quiz id
    // for internal use. 
    // when a quiz is deleted, delete all its submissions

}

var submissionModel = mongoose.model('Submissions', submissionSchema)
module.exports = submissionModel;