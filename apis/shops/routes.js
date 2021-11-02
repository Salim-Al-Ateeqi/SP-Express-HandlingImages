const express = require("express");
const { productCreate } = require("./controllers");

const router = express.Router();
const { shopCreate, getShops } = require("./controllers");

router.post("/:shopId/products", productCreate);
router.post("/", shopCreate);
router.get("/", getShops);

module.exports = router;
