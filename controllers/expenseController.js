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
        console.log("Quarter: " + qtr);
         var b = 0;
         var e = 0;
         if (qtr == 1)
         {
             b=0;
             e=4;
         }
         else if (qtr == 2) {
             b=3;
             e=7;
         }
         else if (qtr == 3) {
             b=6;
             e=10;
         }
         else {
             b=9;
             e=13;
         }
        db.Expenses.find({$and:[{month:{$gt:b}}, {month:{$lt:e}}]})
            .then(dbExpense => res.json(dbExpense))
            .catch(err=> res.status(422).json(err));
    }
}

// switch (qtr) {
//     case 1:
//        b = 0;
//         e = 4;
//         break;
//     case 2:
//         b = 3;
//         e = 7;
//         break;
//     case 3:
//         b = 6;
//         e = 10
//         break;
//     case 4:
//         b = 9;
//         e = 13;
//         break;
//     default:
//         break;
// }