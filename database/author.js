const mongoose = require("mongoose");

//Creating author schmea
const Authorschema = mongoose.Schema(
    {
        id: Number,
        Name: String,
        books: [String]
    }
);

const Authormodel= mongoose.model("Authors",Authorschema);
module.exports=Authormodel;