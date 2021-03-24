var Quiz = require('../model/dao');

exports.createQuiz = (req, res, next) => {

    let quiz = {
        title: req.body.title, 
        description: req.body.description,
        questions: JSON.parse(JSON.stringify(req.body.questions))
    };

    Quiz.create(quiz, (err, quiz) => {
        // validate quiz 
        if(err) {
            // res.json({error: err})
            res.status(400).json({ msg: "error bad request" })
            return
        }
        res.status(200).json({ msg: "Quiz created successfully", quiz: quiz})
    })
}

// get all quizzes
exports.getQuizzes = (req, res, next) => {
    Quiz.getAll({}, (err, quizzes) => {
        if(err) {
            res.json({error: err})
            return
        }
        res.json({ quizzes: quizzes })
    })
}

// get quiz by id
exports.getQuizByID = (req, res, next) => {
    Quiz.getByID({_id: req.params._id}, (err, quiz) => {
        if(err) {
            res.status(400).json( {msg: `No member with the id of ${req.params.id}` });
            return 
        } 
        res.json({quiz: quiz})
    })
}

// get quiz by title 
exports.getQuizByTitle = (req, res, next) => {
    Quiz.getByTitle({title: req.params.title}, (err, quiz) => {
        if(err) {
            res.json({error: err})
            return 
        }
        res.json({quiz: quiz})
    })
}

// update quiz 
exports.updateQuiz = (req, res, next) => {
    var quiz = {
        title: req.body.title, 
        description: req.body.description,
        questions: JSON.parse(JSON.stringify(req.body.questions))
    }

    Quiz.updateOne({_id: req.params.id}, quiz, (err, quiz) => {
        if(err) {
            res.json({error: err})
            return
        }
        res.json({ msg: "Quiz updated successfully", quiz: quiz})
    })
}

// add submission to quiz
exports.submitQuiz = (req, res, next) => {
    // https://stackoverflow.com/a/28376006
    var locationObject = req.body.submission.questions,
    insertObjects = [],
    key;

    // loop through questions and isnert in insertObjects
    for (key in locationObject) { 
        insertObjects.push(locationObject[key]); 
    }

    let submission = {
        username: req.body.submission.username,
        grade: req.body.submission.grade,
        questions: insertObjects
    }

    // updateOne (query, submission)
    Quiz.appendOne({_id: req.params._id}, {submissions: submission}, (err, quiz) => {
        if(err) {
            res.json({error: err})
            return
        }
        res.json({ msg: "Quiz updated successfully", quiz: quiz})
    })
}

// delete quiz by id 
exports.deleteQuiz = (req, res, next) => {
    Quiz.delete({_id: req.params.id}, (err, quiz) => {
        if(err) {
            res.json({error: err})
            return
        }
        res.json({ msg: `Quiz with id ${quiz._id} and title "${quiz.title}" deleted successfully`})
    })
}

// get all submissions by a particular quiz id 
exports.getAllSubmissions = (req, res, next) => {
    Quiz.getByID({_id: req.params._id}, (err, quiz) => {
        if(err) {
            res.json({error: err})
            return 
        }
        res.json( { subs: quiz.submissions })
    })
}

// get one submission by a particular quiz id and a username
// use Quiz.getAll because it uses the find() method. 
// since we need to query by  th quiz id and the username
// exports.getSubsByUsernameAndID = (req, res, next) => {
//     Quiz.getAll({_id: req.params._id, username: req.params.username}, (err, subs) => {
//         if(err) {
//             res.json({error: err})
//             return 
//         }
//         res.json( { submissions: subs })
//     })
// }