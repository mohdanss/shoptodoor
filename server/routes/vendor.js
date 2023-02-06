const Store = require("../models/store");
const Product = require("../models/product");
const mongoose = require("mongoose");
module.exports.becomeVendor = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("User id is required");
  }
  const storeAlreadyExist = await Store.findOne({ owner_id: req.params.id }); // check if store already exist
  console.log(storeAlreadyExist);
  if (storeAlreadyExist) {
    return res.status(409).send("Store Already Exist");
  }
  const store = new Store({
    store_name: req.body.store_name,
    adress: req.body.adress,
    phone: req.body.phone,
    products: [], // create a product
    owner_id: req.params.id,
  });
  User.findByIdAndUpdate(
    (c) => {
      c.id == req.params.id;
    },
    { role: "vendor" }
  );
  store
    .save()
    .then((item) => {
      return res.status(200).json(item);
    })
    .catch((err) => {
      return res.status(400).send("Unable to save to database");
    });
};

module.exports.addProduct = async (req, res) => {
  const store_id = mongoose.Types.ObjectId(req.params.id);
  var current_store = await Store.findOne({ _id: store_id });
  if (current_store) {
    const product_name = req.body.product_name;
    const description = req.body.description;
    const price = req.body.price;
    const rating = 0;
    const product_type = req.body.type;
    const quantity = req.body.quantity;
    const product = new Product({
      product_name: product_name,
      description,
      price,
      rating,
      store_id,
      product_type,
      quantity,
    });
    current_store.update({ $push: { products: product } });
    product
      .save()
      .then((item) => {
        return res.status(200).json(item);
      })
      .catch((err) => {
        return res.status(400).send(err);
      });
  } else {
    return res.status(400).send("Please store register first");
  }
};

module.exports.getStoreProduct = async (req, res) => {
  const storeid = mongoose.Types.ObjectId(req.params.store_id);
  const allProducts = await Product.find({ store_id: storeid });
  if (allProducts.length > 0) {
    return res.status(200).send(allProducts);
  } else {
    return res.status(400).send({ msg: "No Product found in store" });
  }
};

module.exports.searchProductByName = async (req, res) => {
  const product_name = req.params.product_name;
  const result = await Product.find({ product_name: { $regex: product_name } });
  if (result.length > 0) {
    return res.status(200).send(result);
  } else {
    return res.status(400).send({ msg: "No Product Found" });
  }
};

// module.exports.updateProduct = async (req, res) => {
//   const productId = req.params.product_id;
//   var product = await Product.find({ id: ObjectId(productId) });
// };
