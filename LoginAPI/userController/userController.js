const nodemailer = require('nodemailer')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const userModel = require('../Model/userModels');
const commonFunction = require('../commonFunction/commonFunction');


module.exports = {
    singnUp: async (req, res) => {
        try {
            let result = await userModel.findOne({
                $and: [{ $or: [{ email: req.body.email }] },
                { status: { $ne: "DELETE" } },
                { userType: 'USER' }]
            })
            if (result) {
                return res.send({ responseCode: 409, responseMessage: "Email Already Exist.", result: [] })
            }
            else {
                req.body.firstName = req.body.firstName
                req.body.lastName = req.body.lastName
                req.body.mobileNumber = req.body.mobileNumber
                req.body.address = req.body.address
                req.body.dateOfBirth = req.body.dateOfBirth
                req.body.otp = commonFunction.otp();
                req.body.otpExpireTime = Date.now() + 3 * 60 * 60 * 1000;
                let password = req.body.password;
                let confirm = req.body.confirmPassword;
                if (password != confirm) {
                    res.send({ responseCode: 401, responseMessage: 'password do not match' })
                }
                else {
                    req.body.password = bcrypt.hashSync(password)
                    let subject = 'signUp Otp';
                    let text = `Your OTP:${req.body.otp}`;

                    let mail = commonFunction.sendMail(req.body.email, subject, text)
                    if (!mail) {
                        return res.send({ responseCode: 500, responseMessage: 'Internal server error.', result: [] })
                    }
                    else {
                        let userSave = await new userModel(req.body).save()
                        if (!userSave) {
                            return res.send({ responseCode: 500, responseMessage: 'Internal server Error.', result: [] })
                        }
                        else {
                            return res.send({ responsecode: 200, responseMessage: 'SignUp Successfully', responseResult: userSave });
                        }
                    }
                }
            }
        }
        catch (error) {
            return res.send({ responseCode: 501, responseMessage: 'Something went wrong', result: error.message })
        }

    },
    otpVerify: async (req, res) => {
        try {
            let resultVerify = await userModel.findOne({
                $and: [{ $or: [{ email: req.body.email }] },
                { status: { $ne: "DELETE" } },
                { userType: "USER" }]
            })
            if (!resultVerify) {
                return res.send({ responseCode: 401, responseMessage: "User not Found", responseResult: [] });
            } else {
                if (resultVerify.otpVerify == true) {
                    return res.send({ responseCode: 401, responseMessage: "User not Found", responseResult: [] });
                }
                else {
                    let currentTime = Date.now();
                    if (req.body.otp == resultVerify.otp) {
                        if (resultVerify.otpExpireTime >= currentTime) {
                            let resVerify = await userModel.findByIdAndUpdate({ _id: resultVerify._id },
                                { $set: { otpVerify: true } }, { new: true })
                            if (!resVerify) {
                                return res.send({ responseCode: 500, responseMessage: 'Internal server Error', result: [] })
                            } else {
                                return res.send({ responseCode: 200, responseMessage: "user Verify Sucessful", result: resVerify });
                            }
                        } else {
                            res.send({ responseCode: 410, responseMessage: 'OTP is Expired', result: [] });
                        }
                    } else {
                        res.send({ responseCode: 400, responseMessage: "Wrong Otp", result: [] });
                    }
                }
            }
        } catch (err) {
            return res.send({ responseCode: 501, responseMessage: "Something went wrong", result: err.mesasage })
        }
    },
    
    login: async (req, res) => {
        userModel.find({ email: req.body.email })
            .exec()
            .then(user => {
                if (user.length < 1) {
                    return res.status(400).json({
                        msg: 'user not found '
                    })
                }
                bcrypt.compare(req.body.password, user[0].password,
                    (err, result) => {
                        if (!result) {
                            return req.status(401).json({
                                msg: 'password maching fail'
                            })
                        }

                        if (result) {
                            const token = jwt.sign(
                                {
                                    firstName: user[0].firstName,
                                    mobileNumber: user[0].mobileNumber,
                                    address: user[0].address
                                },
                                'this is dummy text',
                                {
                                    expiresIn: "10min"
                                });
                            res.status(200).json({
                                firstName: user[0].firstName,
                                mobileNumber: user[0].mobileNumber,
                                address: user[0].address,
                                token: token
                            })
                        }
                    })
            })
            .catch(err => {
                res.status(500).json({
                    err: err
                })
            })
    }
}