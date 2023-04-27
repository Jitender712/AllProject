const Product = require("../model/Product");



// Get all Products

const all_details = async (req, res) => {

    try {
        const products = await Product.find();
        res.json(products);
    
    } catch (error) {
        res.json({message :  error});

    }

};


// Single Product

const product_detail = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        res.json(product);
           } catch(error)
           {
           res.json({message : error});
        }
 };


// Add New Product

const create = async (req, res) => { 
    const product = new Product({
        Pname : req.body.Pname,
        price : req.body.price,
        Details :req.body.Details
    });
    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
        console.log("Produvt id created");
    } catch(error){
        res.status(400).send(error);
    }
};

// Update  Product

const updateP = async (req, res) => { 
    try{
        const product = {
            Pname : req.body.Pname,
            price : req.body.price,
            Details : req.body.Details
        };
        const updatedProduct = await Product.findByIdAndUpdate(
            {_id:req.params.productId},product);
            res.json(updatedProduct)
            console.log("Product is Updated");

    }catch(error){
        res.json({message : error})
    }
};


const deleteP = async (req, res) => { 
    try {
       const removeP = await Product.findByIdAndDelete(req.params.productId);
        res.josn(removeP);
        console.log("Product is Deleted");
    } catch(error){
        res.json({message : error});

    }
};


module.exports = {
    all_details,
    product_detail,
    create,
    updateP,
    deleteP
}