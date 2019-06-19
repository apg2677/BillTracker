const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findAll: function (req, res) {
    db.Expense.find(req.query)
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Expense.findById(req.params.id)
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.Expense.create(req.body)
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Expense.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Expense.findById(req.params.id)
      .then(dbExpense => dbExpense.remove())
      .then(dbExpense => res.json(dbExpense))
      .catch(err => res.status(422).json(err));
  }
};
