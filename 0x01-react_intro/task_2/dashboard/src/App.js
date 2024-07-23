import React from 'react';
import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return(
    <div className='App'>
      <header className='App-header'>
        {/* Add the holberton logo */}
        <img src={logo} alt='holberton logo'/>
        <h1>School dashboard</h1>
      </header>
      <hr/>
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
      <hr/>
      <div className='App-footer'>
        <footer>
          {/* Add the footer */}
          {/* Update to use functions in utils.js */}
          <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;