import React from "react";
import "./style.css";


function SignUpForm({ username, password, handleInputChange, handleFormSubmit, handleLogInButton })    {
    return (

    <form>
        <div className="form-group">

            <label htmlFor="username">
                <strong>Sign-Up Page</strong>
                &nbsp;&nbsp;<i className="fas fa-user-plus"></i>
            </label>

            <input
                className="form-control"
                type="text"
                id="username"
                name="username"
                value={username}
                placeholder="Input Username.."
                onChange={handleInputChange}
                required={true}
            />

            <input
                className="form-control"
                type="text"
                id="password"
                name="password"
                value={password}
                placeholder="Input Password.."
                onChange={handleInputChange}
                required={true}
            />

        </div>
        
        <div className="homeButtons">

        <button
                onClick={handleFormSubmit}
                type="submit"
                className="btn btn-lg btn-danger"
            >
                Sign Up
        </button>

        &nbsp;&nbsp;&nbsp;

        <button
                onClick={handleLogInButton}
                type="submit"
                className="btn btn-lg btn-outline-success"
            >
                Log In
        </button>        

        </div>
    </form>
  );
}


export default SignUpForm;
