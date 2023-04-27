const express = require("express");
require('./DB_connection/db_connect');
const app = express();

const cors = require('cors');

// Import Routes 

const userRoutes = require('./routes/index')

// Middleware
app.use(express.json());
app.use(cors());

// Routes Middleware
app.use("/api/login" , userRoutes);



app.listen(4020 , () => 
      console.log("Running at 4020")    

); 