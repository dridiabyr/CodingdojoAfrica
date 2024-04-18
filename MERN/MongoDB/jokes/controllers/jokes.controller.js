const jokesModel =require('../models/jokes.model')
module.exports.createJoke = (req, res) => {
  jokesModel
    .create(req.body)

    .then((joke) => res.json(joke))
    .catch((err) => res.json(err));
};

module.exports.getAllJokes = (req, res) => {
  jokesModel.find()
    .then((jokes) => res.json(jokes))
    .catch((err) => res.json(err));
};

module.exports.getjokeById = (req, res) => {
  jokesModel
    .findById({ _id: req.params.id }, req.body, { new: true })
    .then((getjokeById) => res.json(getjokeById))
    .catch((err) => res.json(err));
};

module.exports.updateJokes = (req, res) => {
  jokesModel
    .findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })
    .then((updateJokes) => res.json(updateJokes))
    .catch((err) => res.json(err));
};

module.exports.deleteJokes = (req, res) => {
  jokesModel
    .findByIdAndDelete({ _id: req.params.id }, req.body, {
      new: true,
    })
    .then((deleteJokes) => res.json(deleteJokes))
    .catch((err) => res.json(err));
};
