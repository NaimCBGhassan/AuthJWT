import Product from "../models/Products.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    error.message = "Error en el servidor";
    res.status(500).json(error);
  }
};

export const getProductsById = async (req, res) => {};

export const createProducts = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    newProduct.save();
    res.json(newProduct);
  } catch (error) {}
};

export const updateProducts = async (req, res) => {
  res.json("update");
};

export const deleteProducts = async (req, res) => {
  res.json("delete");
};
