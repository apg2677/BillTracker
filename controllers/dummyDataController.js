const db = require("../models/");

module.exports = {
    create: (req, res) => {
        db.Expenses.create(
            {
                month: 2,
                year: 2019,
                rentMortgage: 1500,
                insurance: 345,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 3,
                year: 2019,
                rentMortgage: 1500,
                insurance: 345,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 4,
                year: 2019,
                rentMortgage: 1500,
                insurance: 345,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            }

        )
    }
}