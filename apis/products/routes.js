const express = require("express");
const {
  productListFetch,
  productDelete,
  productUpdate,
  productDetailFetch,
  fetchProduct,
} = require("./controllers");
const upload = require("../../middleware/multer");

// Create a mini express application
const router = express.Router();

// Param Middleware
router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    next({ status: 404, message: "Product Not Found!" });
  }
});

router.get("/", productListFetch);

router.get("/:productId", productDetailFetch);

router.put("/:productId", upload.single("image"), productUpdate);

router.delete("/:productId", productDelete);

module.exports = router;
