import axios from "axios";

export default {
  // Gets expenses from the Google API
  getExpenses: function(q) {
    return axios.get("/api/expenses/");
  },

  // Gets all saved expenses
  getSavedExpenses: function() {
    return axios.get("/api/expenses/");
  },

  // Deletes the saved expense with the given id
  deleteExpenses: function(id) {
    return axios.delete("/api/expenses/" + id);
  },

  // Saves an expense to the database
  saveExpenses: function(expenseData) {
    return axios.post("/api/expenses", expenseData);
  }
  
};
