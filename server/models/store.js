const moongose = require("mongoose");

const StoreScheme = new mongoose.Schema({
  store_name: { type: String, default: null },
  adress: { type: String, default: null },
  phone: { type: String, default: null },
  products: { type: [ProductSchema], default: [] },
});

module.exports = mongoose.model("store", StoreScheme);
