import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import BusinessAnalysis from "./pages/BusinessAnalysis";
import ExpenseReport from "./pages/ExpenseReport";
import Nav from "./components/Nav";
import ShoppingItems from "./pages/ShoppingItems";
//=====================================
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn";

import "./App.css";


class App extends Component {
  state = {
    loggedIn: false,
    username: null
  }

  // this.getUser = this.getUser.bind(this)
  // this.componentDidMount = this.componentDidMount.bind(this)
  // this.updateUser = this.updateUser.bind(this)

componentDidMount() {
  // this.getUser()
}

updateUser(userObject) {
  this.setState(userObject)
}

getUser() {
  axios.get("/api/user/").then(response => {
    console.log("Get User Response: ")
    console.log(response.data)

    if (response.data.username) {
      console.log("Get User: There is a user saved in the server session: ")
      this.setState({
        loggedIn: true,
        username: response.data.username
      })
    } else {
      console.log("Get User: No username found");
      this.setState({
        loggedIn: false,
        username: null
      })
    }
  })
}

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={SignUp} />
            <Route exact path="/businessanalysis" component={BusinessAnalysis} />
            <Route exact path="/shoppingitems" component={ShoppingItems} />
            <Route exact path="/expensereport" component={ExpenseReport} />

            <Route exact path="/login" component= {LogIn} />
            <Route exact path="/signup" component= {SignUp} />

          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;
