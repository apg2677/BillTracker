const db = require("../models/");

module.exports = {
    create: (req, res) => {
        db.Expenses.create(
            {
                month: 1,
                year: 2019,
                rentMortgage: 150,
                insurance: 345,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 2,
                year: 2019,
                rentMortgage: 1500,
                insurance: 3450,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 3,
                year: 2019,
                rentMortgage: 1500,
                insurance: 3450,
                payroll: 1200,
                advertising: 2340,
                utilities: 1200
            },
            {
                month: 4,
                year: 2019,
                rentMortgage: 15001,
                insurance: 345,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 5,
                year: 2019,
                rentMortgage: 1500,
                insurance: 600,
                payroll: 1200,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 6,
                year: 2019,
                rentMortgage: 15,
                insurance: 345,
                payroll: 12000,
                advertising: 23,
                utilities: 200
            },
            {
                month: 7,
                year: 2019,
                rentMortgage: 1500,
                insurance: 560,
                payroll: 14000,
                advertising: 2341,
                utilities: 1200
            },
            {
                month: 8,
                year: 2019,
                rentMortgage: 500,
                insurance: 35,
                payroll: 120,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 9,
                year: 2019,
                rentMortgage: 150,
                insurance: 34,
                payroll: 2000,
                advertising: 2345,
                utilities: 16200
            },{
                month: 10,
                year: 2019,
                rentMortgage: 150,
                insurance: 345,
                payroll: 1200,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 11,
                year: 2019,
                rentMortgage: 1520,
                insurance: 345,
                payroll: 12000,
                advertising: 234,
                utilities: 1200
            },
            {
                month: 12,
                year: 2019,
                rentMortgage: 150,
                insurance: 1200,
                payroll: 12000,
                advertising: 66,
                utilities: 1200
            }

        )
    }
}