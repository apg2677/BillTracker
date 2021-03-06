const path = require("path");
const router = require("express").Router();
const expenseRoutes = require("./expenses");
const googleRoutes = require("./google");

// Expense routes
router.use("/expenses", expenseRoutes);

// Google Routes
router.use("/google", googleRoutes);

// For anything else, render the html page
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
