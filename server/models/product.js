import { ObjectID } from "bson";
import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  product_name: { type: String, default: null },
  description: { type: String, default: null },
  // add price attribuet with type double and default value 0.0
  price: { type: Number, default: 0.0 },
  rating: { type: Number, default: 0.0 },
  store_id: { type: ObjectID, default: null, require: true },
  product_type: { type: String, default: null },
  quantity: { type: Number, default: 0 },
});

export default model("Product", ProductSchema);
