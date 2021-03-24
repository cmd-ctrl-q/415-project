var Quiz = require('../../controller/quizzes'); 
var Submission = require('../../controller/submissions'); 

module.exports = (router) => {
    // quiz routes
    router.get('/quizzes/', Quiz.getQuizzes);       // ok
    router.get('/quiz/:id', Quiz.getQuizByID);      // ok 
    router.post('/new/', Quiz.createQuiz);          // ok 
    router.delete('/quiz/:id', Quiz.deleteQuiz);    // ok 

    // submission routes
    router.post('/quiz/:id', Submission.createSubmission);                      // ok
    router.get('/quiz/:id/submissions', Submission.getSubmissions);             // ok
    router.get('/quiz/:id/submissions/:sub_id', Submission.getSubmissionByID);  // ok
}