const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  price: { type: Float32Array, default: 0.0 },
  rating: { type: Float32Array, default: 0.0 },
});

module.exports = mongoose.model("product", ProductSchema);
