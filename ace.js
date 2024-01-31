//Require
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//Database
const CarModel = require("./acedatabase");


//initialize
const carry = express();
carry.use(bodyParser.urlencoded({ extended: true }));
carry.use(bodyParser.json());

//Establish database connection 
mongoose.connect("mongodb+srv://asadchaudhry02:Asad4540@mymongo.ov9hazg.mongodb.net/ace")
    .then(() => console.log("Connection successfull"));

carry.post("/cars/new", async (req, res) => {
    const { newcar } = req.body;
    CarModel.create(newcar);
    return res.json({ cars: acedatabase.cars, message: "Car was added" });
});

carry.listen(1250, () => console.log("Server is up and running!!!"));