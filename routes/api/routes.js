var Quiz = require('../../controller/quizzes'); 

module.exports = (router) => {
    // quiz routes
    router.get('/quizzes/', Quiz.getQuizzes); // ok
    router.get('/quiz/:_id', Quiz.getQuizByID); // ok
    router.post('/new/', Quiz.createQuiz); // ok
    router.delete('/quiz/:id', Quiz.deleteQuiz); 
    // router.get('/quiz/:title', Quizzes.getQuizByTitle);
    // router.put('/quiz/:id', Quizes.updateQuiz);

    router.put('/quiz/:_id', Quiz.submitQuiz); // ok 
    // get all submissions by quiz _id
    router.get('/quiz/:_id/submissions', Quiz.getAllSubmissions); // ok 
    // router.put('/quiz/:_id/submissions/username/:username', Quiz.getSubsByUsernameAndID);
}