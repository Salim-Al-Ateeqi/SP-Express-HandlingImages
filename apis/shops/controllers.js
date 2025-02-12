const Shop = require("../../db/models/Shop");
const Product = require("../../db/models/Product");

exports.getShops = async (req, res) => {
  try {
    const shops = await Shop.find().populate("products");
    return res.json(shops);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.shopCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    req.body.owner = req.user._id;
    const newShop = await Shop.create(req.body);
    await newShop.populate({
      path: "owner",
      select: "username",
    });
    return res.status(201).json(newShop);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.shopDelete = async (req, res, next) => {
  try {
    await req.Shop.remove();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.productCreate = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = `http://${req.get("host")}/media/${req.file.filename}`;
    }
    const shopId = req.params.shopId;
    req.body = { ...req.body, shop: shopId };
    const newProduct = await Product.create(req.body);
    await Shop.findOneAndUpdate(
      { _id: req.params.shopId },
      { $push: { products: newProduct._id } }
    );
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
