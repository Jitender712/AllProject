const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    Pname : String ,
    price : String , 
    Details : String
});
module.exports = mongoose.model("Product" , productSchema);