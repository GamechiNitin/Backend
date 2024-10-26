const router = require("express")
    .Router()
const { getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product_controller')

router.get('/product', getProduct);
router.post('/product', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);
module.exports = router