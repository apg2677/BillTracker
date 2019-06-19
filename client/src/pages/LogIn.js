import React, { Component } from "react";
import LogInForm from "../components/LogInForm";
import axios from "axios";
import { Redirect } from "react-router-dom";


class LogIn extends Component {
    state = {
      username: "",
      password: "",
      message: "Enter Username and Password to Log In.",
      redirectTo: null
    };

  
    handleLogInInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
      }
    
    handleLogInSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        axios.post("/api/user/login", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                if (response) {
                    console.log("Successful Log In.");
                    // this.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    this.setState({
                        username: "",
                        password: "",
                        redirectTo: "/expensereport"
                    })
                } else {
                    console.log("Log In Error");

                }
            }).catch(error => {
                console.log("Log In Server Error!");
                console.log(error);

            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {

        return (

            <div>
                <h1 className="text-center">
                <strong>HARM Enterprises Financial Help</strong>
                </h1>

                <h3 className="text-center">We're here to help.. we promise.</h3>

                <LogInForm
                    handleLogInInputChange={this.handleLogInInputChange}
                    handleLogInSubmit={this.handleLogInSubmit}
                    username={this.state.username}
                    password={this.state.password}
                />

            </div>
        );
        }
    }
}


export default LogIn;
