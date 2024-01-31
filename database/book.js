const mongoose = require("mongoose");

//Create Book schema
const Bookschema = mongoose.Schema(
    {
        ISBN: String,
        title: String,
        pubDate: Number,
        language: String,
        numPage: Number,
        author: [Number],
        publications: [Number],
        category: [String]
    }
);

const bookmodel = mongoose.model("books",Bookschema);
module.exports= bookmodel;