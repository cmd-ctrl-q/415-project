const express = require('express');
var mongo = require('./client/mongo');
var routes = require('./routes/api/routes');
const app = express();

// initialize router 
var router = express.Router();

// Initialize mongo db 
mongo();

// Middleware Parser
app.use(express.json());

// eg. /api/quizzes
app.use('', router);

 // call quizes routes with router
routes(router);

// old 
// api/quizes Route 
// app.use('/api/quizes', require('./routes/api/quizes'));

// listen and serve
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));