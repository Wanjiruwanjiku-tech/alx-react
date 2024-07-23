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
        <p>login to access the full dashboard</p>
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