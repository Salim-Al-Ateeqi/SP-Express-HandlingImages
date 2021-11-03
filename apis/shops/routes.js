const express = require("express");
const { productCreate } = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();
const { shopCreate, getShops } = require("./controllers");

router.post("/:shopId/products", upload.single("image"), productCreate);
router.post("/", shopCreate);
router.get("/", getShops);

module.exports = router;
