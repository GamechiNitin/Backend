const Product = require('../model/product');

const getProduct = async (req, res) => {
    try {
        const allProducts = await Product.find();
        if (!allProducts || allProducts.length === 0)
            res.status(404).json({
                success: false,
                message: "No Data"
            })

        res.status(200).json({
            success: true,
            data: allProducts
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}

const createProduct = async (req, res) => {
    try {
        const { name, price, desc } = req.body;
        const newProduct = new Product({ name, price, desc });

        await newProduct.save();
        res.status(200).json({
            success: true,
            data: newProduct
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}



const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, desc } = req.body;
        const updateProduct = await Product.findByIdAndUpdate(id, { name, price, desc }, { new: true });
        if (!updateProduct)
            res.status(404).json({
                success: false,
                message: "Failed"
            })
        res.status(200).json({
            success: true,
            data: updateProduct
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error
        })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProductMode = await Product.findByIdAndDelete(id);
        if (!deleteProductMode)
            res.status(404).json({
                success: false,
                message: "Failed"
            })
        res.status(200).json({
            success: true,
            data: deleteProductMode
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error
        })
    }
}
module.exports = { getProduct, createProduct, updateProduct, deleteProduct }