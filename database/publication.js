const mongoose = require("mongoose");

//Create Publication schema
const Publicationschema = mongoose.Schema(
    {
        id: Number,
        Name: String,
        books: [String]
    }
);

const Publicationmodel = mongoose.model("Publication", Publicationschema);
module.exports = Publicationmodel;