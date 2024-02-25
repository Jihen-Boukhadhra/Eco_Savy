
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://admin:MTVZHhHpQBXDqhYV@ecosavy.8hmouyf.mongodb.net/ecosavy?retryWrites=true&w=majority');

//insert data into mongodb
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    //we are connected
    console.log('we are connected');
});

module.exports = db;