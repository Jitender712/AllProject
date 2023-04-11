const userRouter = require("express").Router();
const userController=require("../userController/userController")
userRouter.post("/singnUp",userController.singnUp);
userRouter.put("/otpverify",userController.otpVerify);
userRouter.post("/login" , userController.login);
module.exports=userRouter;
