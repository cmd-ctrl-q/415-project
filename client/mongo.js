var mongoose = require('mongoose');

// set up connection 
const URL = process.env.MONGO_URL 
if(URL === "") {
    console.log(new Error("Error: MONGO_URL environment variable is empty"));
    return 
}

// get the default connection 
var db = mongoose.connection; 

// export the connection for reuse
module.exports = () => {
    
    // useFindAndModify: false allows you to use depreciated mongoose built-in crud functions
    mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
    
    //Bind connection to error event (to get notification of connection errors)
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
}
