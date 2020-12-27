const express = require("express");
const usersRouter = require("./usersRouter");
const categoriesRouter = require("./categoryRouter");
const productsRouter = require("./productRouter");
const paymentRouter = require("./paymentRouter");
const router = express.Router();

router.use("/users", usersRouter);
router.use("/categories", categoriesRouter);
router.use("/products", productsRouter);
router.use("/payments", paymentRouter);

module.exports = router;
