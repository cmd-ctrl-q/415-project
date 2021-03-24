var mongoose = require('mongoose'); 

// Define a schema 
var Schema = mongoose.Schema; 

var submissionSchema = new Schema({
    quiz_id: Schema.Types.ObjectId,
    username: String,  
    questions: [
        {
            _id: false,
            question_id: Schema.Types.ObjectId,
            answer: Schema.Types.Mixed,
        }
    ]
})

module.exports = submissionSchema;