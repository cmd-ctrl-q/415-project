// const express = require('express');
// const router =express.Router();
// const quizes = require('../../Quiz');

// NOTE: Example using array as db

// // Gets all 
// // /api/quizes/
// router.get('/', (_, res) => res.json(quizes));

// // Get quiz 
// // /api/quizes/:id
// router.get('/:id', (req, res) => {
//     const found = quizes.some(quiz => quiz.id === parseInt(req.params.id));
//     if (found) {
//         res.json(quizes.filter(quiz => quiz.id === parseInt(req.params.id)));
//     } else {
//         res.status(400).json( {msg: `No quiz with the id of ${req.params.id}`});
//     }
// });

// // Create quiz 
// // /api/quizes 
// router.post('/', (req, res) => {
//     const newQuiz = {
//         title: req.body.title,
//         description: req.body.description
//     };

//     // validate quiz 
//     if (!newQuiz.title || !newQuiz.description) {
//         return res.status(400).json({ msg: 'Please include a title and description' });
//     }

//     // add new quiz to array or db
//     quizes.push(newQuiz);
//     // quizes.save(newQuiz); // save to db
    
//     // or redirect to another endoint 
//     res.redirect('/api/quizes');
    
//     // send back response 201
//     // return res.status(201).json({ msg: 'quiz saved successfully'});

//     // or could return the new quiz 
//     // return res.json(newQuiz);
// });

// // Update quiz 
// router.put('/:id', (req, res) => {
//     // get id 
//     const found = quizes.some(quiz => quiz.id === req.params.id);
//     if (found) {
//         const updQuiz = req.body; 
        
//         // check db for data


//         // check array for data 
//         // quizes.forEach(quiz => {
//         //     if (quiz.id == parseInt(req.params.id)) {
//         //         quiz.title = updQuiz.title ? updQuiz.title : quiz.title;
//         //         quiz.description = updQuiz.description ? updQuiz.description : quiz.decription;

//         //         res.json({ msg: 'Quiz updated', quiz });
//         //     }
//         // });
//     } else {
//         res.status(400).json( {msg: `No quiz with the id of ${req.params.id}`});
//     }
// });

// // Delete Quiz 
// router.delete('/:id', (req, res) => {
//     // get id 
//     const found = quizes.some(quiz => quiz.id === req.params.id);
//     if (found) {
//         res.json({ msg: 'Quiz deleted', quizes: quizes.filter(quiz => quiz.id !== req.params.id)});
//     } else {
//         res.status(400).json( {msg: `No quiz with the id of ${req.params.id}`});
//     }
// });

// module.exports = router;