const Products = require('../models/productModel')
const httpError = require('../middlewares/http-error')


exports.getAllProducts = async (req, res, next) => {
    try {
      const products = await Products.find()

      if (!products) return next(new httpError('No products found'), 400)

      res.status(200).json({status: "success", products})
    } catch (err) {
        return next(new httpError('Something went wrong, please try again'), 500)
    }
}