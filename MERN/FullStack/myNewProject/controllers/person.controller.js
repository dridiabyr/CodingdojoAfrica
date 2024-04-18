const product = require("../models/product.model");
module.exports.createproduct = (req, res) => {
  productModel
    .create(req.body)

    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};

module.exports.getAllProducts = (req, res) => {
  productModel
    .find()
    .then((products) => res.json(products))
    .catch((err) => res.json(err));
};

module.exports.getproductById = (req, res) => {
  productModel
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getproductById) => res.json(getproductById))
    .catch((err) => res.json(err));
};

module.exports.updateProduct = (req, res) => {
  productModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateProduct) => res.json(updateProduct))
    .catch((err) => res.json(err));
};

module.exports.deleteProduct = (req, res) => {
  productModel
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteProduct) => res.json(deleteProduct))
    .catch((err) => res.json(err));
};
module.exports.getPerson = (req, res) => {
  productModel
    .findOne({ _id: req.params.id })
    .then((product) => res.json(product))
    .catch((err) => res.json(err));
};
