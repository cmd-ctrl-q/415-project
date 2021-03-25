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

// use routes on root path
app.use('', router);

// frontend (temp) 
app.get('/', function (req, res) {
    res.send('Welcome...')
})

 // call quizes routes with router
routes(router);

// listen and serve
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));