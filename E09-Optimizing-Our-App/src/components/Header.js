import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import useOnlineStatus from '../utils.js/useOnlineStatus';
import '../assets/styles/Header.css';
import '../assets/styles/Body.css';

const Header = () => {
    const [value, setValue] = useState('Login');

    const onlineStatus = useOnlineStatus();

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
                <p className='online-offline'>Online status: {onlineStatus ? "🟢" : "🔴"}</p>
            </div>

            <ul className='nav-items'>
                <li><Link to="/" className='nav-link'>Home</Link></li>
                <li><Link to="/grocery" className='nav-link'>Grocery</Link></li>
                <li><Link to="/about" className='nav-link'>About Us</Link></li>
                <li><Link to="/contact" className='nav-link'>Contact Us</Link></li>
                <li className='cart'><i className="fa-solid fa-cart-shopping"></i></li>
                <button className='login-btn' onClick={handleLoginClick}>{value}</button>
            </ul>
        </div>
    )
}

export default Header;