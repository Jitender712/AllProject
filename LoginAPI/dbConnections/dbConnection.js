const mongoose=require("mongoose")
mongoose.connect('mongodb://localhost:27017/JWT',(err,res)=>{
if(err){
    console.log("DB is not connected",err)
}
else{
    console.log("DB Connected sucessfully")
}
});