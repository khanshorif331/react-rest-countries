import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/countries">Countries</a>
                <a href="/about">About Us</a>
            </nav>
            <h1>Welcome to my rest countries</h1>
        </div>
    );
};

export default Header;