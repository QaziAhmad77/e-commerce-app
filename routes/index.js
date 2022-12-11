const express = require("express");
const router = express.Router();

const userRoute = require("./user");
const authRoute = require("./auth");
const productRoute = require("./product");
const cartRoute = require("./cart");
const orderRoute = require("./order");

router.use("/auth", authRoute);
router.use("/users", userRoute);
router.use("/products", productRoute);
router.use("/carts", cartRoute);
router.use("/orders", orderRoute);

module.exports = router;
