import React, { Component } from "react";
import SignUpForm from "../components/SignUpForm";
import axios from "axios";
import { Redirect } from "react-router-dom";
// import PasswordShowHide from "../components/PasswordShowHide/passwordShowHide";


class SignUp extends Component {
    state = {
      username: "",
      password: "",
      message: "Enter Username and Password to Begin!",
      redirectTo: null
    };

   
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
      }
    
    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.username);
        console.log(this.state.password);

        axios.post("/api/user", {
            username: this.state.username,
            password: this.state.password
        })
            .then(response => {
                console.log(response);

                if (response.data) {
                    console.log("Successful Sign Up!");
                    // this.API.updateUser({
                    //     loggedIn: true,
                    //     username: response.data.username
                    // })
                    this.setState({
                        username: "",
                        password: "",
                        redirectTo: "/ExpenseReport"
                    })
                    // this.props.history.push("/dashboard");
                } else {
                    console.log("Sign Up Error");

                }
            }).catch(error => {
                console.log("Sign Up Server Error!");
                console.log(error);
            })
    }

    handleLogInButton = event => {
        event.preventDefault();
        console.log("Let's Go To LogIn!");
        
        this.setState({
            redirectTo: "/login"
        });
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

                <h2 className="text-center">Sign Up to Join Us.  We mean well.</h2>

                <SignUpForm
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    username={this.state.username}
                    password={this.state.password}
                    handleLogInButton={this.handleLogInButton}
                />

                {/* <PasswordShowHide/> */}

            </div>
        );
        }
    }
}


export default SignUp;
