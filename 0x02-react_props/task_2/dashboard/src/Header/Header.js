import React from 'react';
import logo from "../logo.jpg";
import './Header.css';

const Header = () => {
    return(
        <div>
            <header className='App-header'>
                {/* Add the holberton logo */}
                <img src={logo} alt='holberton logo'/>
                <h1>School dashboard</h1>
            </header>
            <hr/>
        </div>
    )
}

export default Header;