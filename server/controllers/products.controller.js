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

export const getProductsById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    res.json(product);
  } catch (error) {
    error.message = "Error en el servidor";
    res.status(500).json(error);
  }
};

export const createProducts = async (req, res) => {
  try {
    const { name, category, price, imgURL } = req.body;
    const newProduct = new Product({ name, category, price, imgURL });
    newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
  }
};

export const updateProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, category, price, imgURL } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(productId, { name, category, price, imgURL }, { new: true });
    res.status(200).json(updatedProduct);
  } catch (error) {
    console.log(error);
  }
};

export const deleteProducts = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);
    res.status(204).json();
  } catch (error) {
    console.log(error);
  }
};
