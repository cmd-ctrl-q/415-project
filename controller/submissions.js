var Submission = require('../model/submission.dao');

// create submission
exports.createSubmission = (req, res, next) => {
    // validation
    // 400 bad request 
    if(req.body.username === "" || req.body.questions.length === 0 || req.params.id == ""){
        res.status(400).json( { msg: "request error" });
        return 
    }

    var locationObject = req.body.questions,
    insertObjects = [],
    key;

    // insert questions into array
    for (key in locationObject) { 
        insertObjects.push(locationObject[key]); 
    }

    let submission = {
        quiz_id: req.params.id,
        username: req.body.username,
        questions: insertObjects
    }

    Submission.create(submission, (err, quiz) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        } 

        // 404 not found
        if(submission === null) {
            res.status(404).json( {msg: "not found error" });
            return            
        }

        // 200 success
        res.status(200).json({ msg: "Submission submitted successfully", submission: submission })
    })
}

// get all submissions by quiz id 
exports.getSubmissions = (req, res, next) => {
    // validation 
    if(req.params.id === ""){
        // 400 status 
        res.status(400).json( { msg: "request error" });
        return 
    }

    Submission.getAll({quiz_id: req.params.id}, (err, submissions) => {
        // 404 not found or 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return
        }

        // 404 not found
        if(submissions.length === 0) {
            res.status(404).json( {msg: "not found error" });
            return            
        }

        // 200 success
        res.status(200).json({submissions: submissions})
    })
}

// get submission by id.
// *could* simply just search by submission id. 
exports.getSubmissionByID = (req, res, next) => {
    // validation
    if(req.body.quiz_id === "" || req.params.id === ""){
        // 400 status 
        res.status(400).json( { msg: "request error" });
        return 
    }

    Submission.getByID({quiz_id: req.params.id, _id: req.params.sub_id}, (err, submission) => {
        // 500 db error
        if(err) {
            res.status(500).json( {msg: "database error" });
            return 
        } 

        // 404 not found
        if(submission === null) {
            res.status(404).json( {msg: "data not found error" });
            return            
        }

        // 200 success
        res.status(200).json({submission: submission})
    })
}
