import { Schema, model } from "mongoose";

const StoreScheme = new Schema({
  store_name: { type: String, default: null },
  adress: { type: String, default: null },
  phone: { type: String, default: null },
  products: { type: Array, default: [] },
  owner_id: { type: String, default: null },
});

export default model("Store", StoreScheme);
