const express = require("express");
const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoryRouter");
const productsRouter = require("./productsRouter");
const router = express.Router();


router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);

module.exports = router;