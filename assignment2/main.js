const express = require("express");
require('./DB_connection/db_connect');
const app = express();

const cors = require('cors');

// Import Routes 

const productRoutes = require('./routes/index')

// Middleware
app.use(express.json());
app.use(cors());

// Routes Middleware
app.use("/api/products" , productRoutes);

app.listen(4000 , () => 
      console.log("Running at 4000")    

); 