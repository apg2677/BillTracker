import React, { Component } from "react";
// import { Redirect } from "react-router-dom";


const LogOut = (props) => (
    <button className= "btn btn-outline-warning btn-sm"
            onClick={props.redirect}>
        Log Out
    </button>
)


// class LogOutButton extends Component {
//     state = {
//         redirectTo: "/login"
//     }

//     handleLogOutButton = event => {
//         event.preventDefault();
//         console.log("See Ya Later!");

//             this.setState({
//                 redirectTo: "/login"
//             })
//             // .then(() => this.setState(() => ({
//             //     redirectTo: true
//             // })))
//     }

  
//     render() {
//         // if (this.state.redirectTo) {
//         //     return 
//         // } else {

//         return (

//             <div className="pull-right">

//             {/* <Redirect to={{ pathname: "/login" }}
//                         render={props => (
//                              <button className= "btn btn-outline-warning btn-sm">Log Out</button>
//                         )} /> */}

            // <Redirect to={{ pathname: "/login" }}
            //             render={props => (
            //                  <button className= "btn btn-outline-warning btn-sm">Log Out</button>
            //             )} />

//             </div>

//         );
//         }
//     // }
// }

  
export default LogOut;
