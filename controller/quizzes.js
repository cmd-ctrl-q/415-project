var Quiz = require('../model/quiz.dao');

exports.createQuiz = (req, res, next) => {
    // validation 
    // 400 request error
    if(req.body.title === "" || req.body.description === "" || req.body.questions.length === 0 || req.params.id == ""){
        res.status(400).json( { msg: "request error" });
        return 
    }

    let quiz = {
        title: req.body.title, 
        description: req.body.description,
        questions: JSON.parse(JSON.stringify(req.body.questions))
    };

    Quiz.create(quiz, (err, quiz) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        } 

        // 404 not found
        if(quiz === null) {
            res.status(404).json( {msg: "not found error" });
            return            
        }

        // 200 success
        res.status(200).json({ msg: "Quiz created successfully", quiz: quiz })
    })
}

// get all quizzes
exports.getQuizzes = (req, res, next) => {
    // validate id 
    if(req.params.id === "") {
        res.status(400).json({ msg: "request error" })
        return 
    }

    Quiz.getAll({}, (err, quizzes) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        }

        if(quizzes.length === 0) {
            res.status(404).json({ msg: "Error no quizzes found" })
            return 
        }

        // 200 success
        res.status(200).json({ quizzes: quizzes });
    })
}

// get quiz by id
exports.getQuizByID = (req, res, next) => {
    // validation 
    // 400 request error 
    if(req.params.id === "") {
        res.status(400).json({ msg: "request error" })
        return 
    }

    Quiz.getByID({_id: req.params.id}, (err, quiz) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        } 
        
        // 404 not found
        if(quiz === null) {
            res.status(404).json( {msg: "not found error" });
            return            
        }
        
        // 200 success
        res.status(200).json({ quiz: quiz })
    })
}

// update quiz 
exports.updateQuiz = (req, res, next) => {
    // validation
    // 400 request error
    if(req.body.title === "") {
        if(req.body.description === "") {
            if(req.body.questions.length === 0) {
                // if all three empty/nil
                res.status(400).json( { msg: "request error" });
                return 
            }
        }
    }

    // if id empty 
    if(req.params.id === "") {
        res.status(400).json( { msg: "request error" });
        return 
    }

    var quiz = {
        title: req.body.title, 
        description: req.body.description,
        questions: JSON.parse(JSON.stringify(req.body.questions))
    }

    Quiz.updateOne({_id: req.params.id}, quiz, (err, quiz) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        } 

        // 200 success
        res.status(200).json({ msg: "Quiz updated successfully", quiz: quiz })
    })
}

// delete quiz by id 
exports.deleteQuiz = (req, res, next) => {
    Quiz.delete({_id: req.params.id}, (err, quiz) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        } 

        // 200 success
        res.status(200).json({ msg: "Quiz deleted successfully" })
    })
}
