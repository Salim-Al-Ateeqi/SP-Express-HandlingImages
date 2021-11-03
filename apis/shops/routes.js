const express = require("express");
const { productCreate, shopDelete } = require("./controllers");
const upload = require("../../middleware/multer");

const router = express.Router();
const { shopCreate, getShops } = require("./controllers");

router.post("/:shopId/products", upload.single("image"), productCreate);
router.post("/", shopCreate);
router.get("/", getShops);
router.delete("/:shopId", shopDelete);

module.exports = router;
