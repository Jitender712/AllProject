const mongoose = require("mongoose");
const validator = require("validator");

const detailSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Email is Invalid");
            }
        },
        validate(value){
            if(!value == this.unique){
                throw new Error(" Email is already exist");
            }
        }
    },
    Username: {
        type: String,
        lowercase: true,
        minlength: 6,
        unique: true
    },
    Password: {
        type: String,
        required: true,
        minlength: 8

    },
    Name: {
        type: String,
        required: true,

    },

    PhoneNo: {
        type: Number,
        length: 10,
        required: true,
        unique: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = mongoose.model("Detail", detailSchema);