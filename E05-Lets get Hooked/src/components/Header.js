import React from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src={logo}
                    alt='logo'
                />
            </div>

            <ul className='nav-items'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>About Us</li>
                <li className='nav-link'>Contact Us</li>
                <li className='cart'><i className="fa-solid fa-cart-shopping"></i></li>
            </ul>
        </div>
    )
}

export default Header;