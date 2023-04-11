const express=require("express");
const bodyParser = require("body-parser");
const app=express();


require("./dbConnections/dbConnection")
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const Port=5001;
let userRouter=require('./routing/userRouting')
app.use('/user',userRouter);

app.listen(Port,(err,result)=>{
    if(err){
        console.log("port is not listening",err);
    }
    else{
        console.log("port is listening");
    }
});