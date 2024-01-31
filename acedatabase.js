const mongoose = require("mongoose");
const CarSchema = mongoose.Schema(
    {

        "Name": String,
        "Model": String,
        "Year" : Number,
        "Manufacture":String

        /*"Name": "BMW",
        "Model": "X7",
        "Year" : "2007",
        "Manufacture":"Bavaria"*/
    }
);

const CarModel = mongoose.model("cars",CarSchema);
module.exports = CarModel;