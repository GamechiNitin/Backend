const {
    Schema,
    model
} = require("mongoose");

const Product = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50
    },
    price: {
        type: String,
        required: true,
        maxlength: 50
    },
    desc: {
        type: String,
        required: true,
        maxlength: 50
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const ProductModel = model("Product", Product)

module.exports = ProductModel