const mongoose = require('mongoose');
const Product = require('../models/Product');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (e) {
    console.log(error);
    res.status(500).json({
      messege: 'internal server error',
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (e) {
    console.log(error);
    res.status(500).json({
      messege: 'internal server error',
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
