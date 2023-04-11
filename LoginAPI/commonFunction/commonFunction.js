const { model } = require('mongoose');
const nodemailer = require('nodemailer');
module.exports={

    // Creating OTP to be sent
    otp:()=>{
        let randomNumber=Math.random();
        let sixDigit=Math.floor(randomNumber*100000)+100000;
        return sixDigit;
    },

    // sending mail 
    sendMail:async(email,subject,text)=>{
        try{
            let transporter = nodemailer.createTransport({
                service:"gmail",
                port:587,
                secure:false,
                auth:{
                    user: "LDT.Technology517@gmail.com",
                    pass: "LDTtechnology@",
                },
                
            });
            let options={
                from:"LDT.Technology517@gmail.com",
                to:"www.jdjitender@gmail.com",
                subject:subject,
                text:text,
            }

            return await transporter.sendMail(options)
        }catch (error){
            console.log('31===>',error)
        }
    }
}
