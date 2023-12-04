import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import '../assets/styles/Header.css';
import '../assets/styles/Body.css';

const Header = () => {
    const [value, setValue] = useState('Login');

    const handleLoginClick = () => {
        value === 'Login' ? setValue('Logout') : setValue('Login');
    }

    // reload the page when user clicks on logo image
    const handleReload = () => {
        window.location.reload();
    }

    return (
        <div className='header'>
            <div className='logo-container'>
                <img
                    className='logo'
                    src={logo}
                    alt='logo'
                    onClick={handleReload}
                />
            </div>

            <ul className='nav-items'>
                <li className='nav-link'>Home</li>
                <li className='nav-link'>About Us</li>
                <li className='nav-link'>Contact Us</li>
                <li className='cart'><i className="fa-solid fa-cart-shopping"></i></li>
                <button className='login-btn' onClick={handleLoginClick}>{value}</button>
            </ul>
        </div>
    )
}

export default Header;