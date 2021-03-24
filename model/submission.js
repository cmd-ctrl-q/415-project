var mongoose = require('mongoose'); 

// Define a schema 
var Schema = mongoose.Schema; 

var submissionSchema = new Schema({
    username: String,  
    grade: Number,
    questions: [
        {
            _id: false,
            question_id: Schema.Types.ObjectId,
            answer: Schema.Types.Mixed,
            correct: String
        }
    ]
})

module.exports = submissionSchema;