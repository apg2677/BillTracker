const db = require("../models/");

module.exports = {
    create: (req, res) => {
        db.Expenses.create(req.body)
            .then(dbExpense => res.json(dbExpense))
            .catch(err => res.status(422).json(err));
    },
    read: (req, res) => {
        db.Expenses.find({})
            .then(dbExpense => res.json(dbExpense))
            .catch(err=> res.status(422).json(err));
    },
    findByMonth: (req, res) => {
        db.Expenses.findOne({month:req.params.mon})
            .then(dbExpense => res.json(dbExpense))
            .catch(err=> res.status(422).json(err));
    },
    readByQtr: (req, res) => {
        var qtr = req.params.qtr;
        // qtr = 1;
        console.log("Quarter: " + qtr);
         var b = 0;
         var e = 0;
         ({ b, e } = SwitchQtr(qtr, b, e));
        var query = {$and:[{month:{$gte:b}}, {month:{$lte:e}}]};
        db.Expenses.find(query).sort({month:1})
            .then(dbExpense => res.json(dbExpense))
            .catch(err=> res.status(422).json(err));
    }
}

function SwitchQtr(qtr, b, e) {
    console.log("Inside Switch Qtr:" + qtr);
    if (qtr == 1) {
        b = 1;
        e = 3;
    }
    else if (qtr == 2) {
        b = 4;
        e = 6;
    }
    else if (qtr == 3) {
        b = 7;
        e = 9;
    }
    else {
        b = 10;
        e = 12;
    }
    console.log("B: " + b);
    console.log("E: " + e);
    
    return { b, e };
}

