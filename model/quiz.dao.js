var mongoose = require('mongoose');
// import quiz schema 
var quizSchema = require('./quiz');

quizSchema.statics = {
    create: function(data, cb) {
        var quiz = new this(data);
        quiz.save(cb);
    },
    
    getAll: function(query, cb) {
        this.find(query, cb);
    },

    getByID: function(id, cb) {
        this.findById(id, cb);
    },

    getByTitle: function(query, cb) {
        this.find(query, cb);
    },

    updateOne: function(query, updData, cb) {
        this.findByIdAndUpdate(query, {$set: updData}, {new: true}, cb);
    },

    appendOne: function(id, data, cb) {

        // query by id and push into data field
        this.findByIdAndUpdate(
            id, { $push: data }, cb)
    },

    delete: function(query, cb) {
        this.findByIdAndDelete(query, cb);
    }, 

}

var quizModel = mongoose.model('Quizzes', quizSchema)
module.exports = quizModel;