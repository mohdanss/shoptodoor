import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
  products: { type: [ProductSchema], default: [] },
  status: { type: String, default: null },
  total_price: { type: Float32Array, default: 0.0 },
  delivery_adress: { type: String, default: null },
  created_at: { type: Date, default: Date.now() },
  delivered_at: { type: Date, default: Date.now() },
});

export default model("order", OrderSchema);
