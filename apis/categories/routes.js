const express = require("express");
const router = express.Router();
const { categoryCreate, getCategories } = require("./controllers");

router.get("/", getCategories);
router.post("/", categoryCreate);

module.exports = router;
