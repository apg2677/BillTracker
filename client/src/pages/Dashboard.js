import React from "react";
import LogOut from "../components/LogOut";
// import axios from "axios";
// import { Redirect } from "react-router-dom";


function Dashboard() {

    return (

            <div>

                <h1 className="text-center">
                    <strong>HARM Enterprises Financial Help</strong>
                </h1>

                <h2 className="text-center">We're here to help.. we promise.</h2>

                <LogOut />


            </div>
        );
    }


export default Dashboard;
