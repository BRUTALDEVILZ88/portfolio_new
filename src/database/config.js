const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://rishita:LO5hfIcULOHcJjsv@cluster0.hdlqcvn.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log(`connected`);
    }).catch((error) => {
        console.log(error);
    })