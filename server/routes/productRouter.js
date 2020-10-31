const express = require("express");
const router = express.Router();
const auth = require('../middlewares/check-auth')
const { getAllProducts, addNewProducts, updateProduct, deleteProduct} = require('../controllers/productCtrl')

router.get('/'. getAllProducts)
router.post('/'. addNewProducts)
router.patch('/product/:id'. updateProduct)
router.delete('/product/:id'. deleteProduct)




module.exports = router;