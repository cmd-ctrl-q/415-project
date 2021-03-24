var mongoose = require('mongoose'); 
var submissionSchema = require('./submission')

// Define a schema 
var Schema = mongoose.Schema; 

var quizSchema = new Schema({
    title: String, 
    description: String,
    questions: [
        {
            question: String, 
            question_type: String, 
            choices: Array,
        }
    ],
});


module.exports = quizSchema;