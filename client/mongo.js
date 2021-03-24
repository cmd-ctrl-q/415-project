var mongoose = require('mongoose');

// set up connection 
var url = 'mongodb://127.0.0.1/cmps411db';

// get the default connection 
var db = mongoose.connection; 

// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

// export the connection for reuse
module.exports = () => {
    
    // useFindAndModify allows you to use depreciated mongoose built-in crud functions
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
    
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
