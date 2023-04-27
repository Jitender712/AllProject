const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/jitender" , (err) => {
    if(!err) console.log('Connected to DB');
    else console.log('not connected');
})
