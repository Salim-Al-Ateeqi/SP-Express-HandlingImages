const express = require("express");
const { productCreate } = require("./controllers");

const router = express.Router();
const { categoryCreate, getCategories } = require("./controllers");

router.post("/:categoryId/products", productCreate);
router.post("/", categoryCreate);
router.get("/", getCategories);

module.exports = router;
