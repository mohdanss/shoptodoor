import Store from "../models/store.js";
import Product from "../models/product.js";
import { User } from "../models/user.js";
import { Types } from "mongoose";
import { ObjectId } from "mongodb";

export const becomeVendor = async (req, res) => {
  if (!req.params.id) {
    return res.status(400).send("User id is required");
  }

  const storeAlreadyExist = await Store.findOne({ owner_id: req.params.id }); // check if store already exist

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

export const addProduct = async (req, res) => {
  const store_id = Types.ObjectId(req.params.id);
  var current_store = await Store.findOne({ _id: store_id });
  console.log(current_store);
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
    Store.updateOne({ store_id: store_id }, { $push: { products: product } })
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

export const getStoreProduct = async (req, res) => {
  const storeid = Types.ObjectId(req.params.store_id);
  var allProducts = await Store.find({ _id: storeid });
  // allProducts = allProducts["products"];
  if (allProducts.length > 0) {
    return res.status(200).send(allProducts);
  } else {
    return res.status(400).send({ msg: "No Product found in store" });
  }
};

// export const searchProductByName = async (req, res) => {
//   const product_name = req.params.product_name;
//   const result = await find({ product_name: { $regex: product_name } });
//   if (result.length > 0) {
//     return res.status(200).send(result);
//   } else {
//     return res.status(400).send({ msg: "No Product Found" });
//   }
// };

// export const updateProduct = async (req, res) => {
//   const productId = req.params.product_id;
//   const product_name = req.body.product_name;
//   const description = req.body.description;
//   const price = req.body.price;
//   const rating = 0;
//   const product_type = req.body.type;
//   const quantity = req.body.quantity;
//   await updateOne(
//     { __id: ObjectId(productId) },
//     {
//       $set: {
//         product_name,
//         description,
//         price,
//         rating,
//         product_type,
//         quantity,
//       },
//     }
//   )
//     .then((item) => {
//       return res.status(200).json(item);
//     })
//     .catch((err) => {
//       return res.status(400).send(err);
//     });
//   {
//   }
// };
