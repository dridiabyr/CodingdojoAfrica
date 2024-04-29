const storeModel =require('../models/store.models')
module.exports.createStore = (req, res) => {
  storeModel
    .create(req.body)

    .then((storefinder) => res.json(storefinder))
    .catch((err) => res.json(err));
};

module.exports.getAllStores = (req, res) => {
  storeModel.find()
    .then((stores) => res.json(stores))
    .catch((err) => res.json(err));
};

module.exports.getStoreById = (req, res) => {
  storeModel
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getstoreById) => res.json(getstoreById))
    .catch((err) => res.json(err));
};

module.exports.updateStore = (req, res) => {
  storeModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateStore) => res.json(updateStore))
    .catch((err) => res.json(err));
};

module.exports.deleteStore = (req, res) => {
  storeModel
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteStore) => res.json(deleteStore))
    .catch((err) => res.json(err));
};
