const express = require("express");
const { productCreate, shopDelete } = require("./controllers");
const upload = require("../../middleware/multer");
const router = express.Router();
const { shopCreate, getShops } = require("./controllers");
const passport = require("passport");

router.get("/", getShops);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  shopCreate
);
router.post("/:shopId/products", upload.single("image"), productCreate);
router.delete("/:shopId", shopDelete);

module.exports = router;
