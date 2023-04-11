const Product =require("../model/Products");

// Get all Product

const product_all = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
      } catch (error) {
        res.json({ message: error });
      }
};


// Single Product

const product_details = async (req , res ) => {
    
};

// Add new  Product

const product_create = async (req , res ) => {};

// Update the Product

const product_update = async (req , res ) => {};

// Delete the Product

const product_delete = async (req , res ) => {};

module.exports = {
    product_all, 
    product_details, 
    product_create, 
    product_update, 
    product_delete
  }