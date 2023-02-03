const mongoose = require("mongoose");
const ProductSchema = require("./product");
const StoreScheme = new mongoose.Schema({
  store_name: { type: String, default: null },
  adress: { type: String, default: null },
  phone: { type: String, default: null },
  products: { type: Array, default: [] },
  owner_id: { type: String, default: null },
});

module.exports = mongoose.model("store", StoreScheme);
