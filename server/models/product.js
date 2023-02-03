const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, default: null },
  description: { type: String, default: null },
  // add price attribuet with type double and default value 0.0
  price: { type: Number, default: 0.0 },
  rating: { type: Number, default: 0.0 },
});

module.exports = mongoose.model("product", ProductSchema);
