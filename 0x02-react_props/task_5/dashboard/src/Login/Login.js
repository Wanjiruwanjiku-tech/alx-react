import React from "react";
import './Login.css';

const Login = () => {
    return (
        <div className='App-body'>
            {/* Add the login */}
            <p>Login to access the full dashboard</p>
            
            {/* ADDING INPUT FOR EMAIL AND PASSWORD AS WELL AS A BUTTON */}
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' id='email'/>
            
            {/* Password */}
            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' id='password'/>
            
            {/* Button */}
            <button>OK</button>
        </div>
    )
}

export default Login;