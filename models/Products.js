const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    }
    
})

module.exports = Products = mongoose.model("products", ProductSchema);