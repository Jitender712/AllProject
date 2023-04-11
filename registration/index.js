const express = require("express");
const app = express();
const path = require("path")
require("./db/monodb")
const PORT = process.env.PORT || 1234
// const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const hbs = require('hbs')
const { urlencoded } = require("express")


// const static_path = path.join(__dirname, "./public")

// app.use(express.static(static_path))

const UserRoute = require('./routes/user')
const homeRoute = require('./routes/home');
// const { path } = require("express/lib/application");

app.use(urlencoded({ extended: false }))


app.set('view engine', ' hbs ')

app.get("/", (req, res) => {
  app.render("index")
})


app.use('/', homeRoute);
app.use('/user', UserRoute);


app.listen(PORT, () => {
  console.log(`Running at ${PORT}...`)
})