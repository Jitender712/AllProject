const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema=new Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },
    mobileNumber:{
        type:Number
    },
    countryCode:{
        type:Number
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    dataOfBirth:{
        type:Date
    },
    otp:{
        type:String
    },
    otpVerify:{
        type:Boolean,
        default:false
    },
    otpExpireTime:{
        type:Number
    },
    status:{
        type:String,
        enum:["ACTIVE","BLOCK","DELETE"],
        default:"ACTIVE"
    },
    userType:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    }
},
{timestamps:true}
);
module.exports=mongoose.model('user',userSchema);