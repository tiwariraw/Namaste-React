import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import useOnlineStatus from '../utils/useOnlineStatus';
import '../assets/styles/Header.css';
import '../assets/styles/Body.css';
import { useSelector } from 'react-redux';

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

    // Subscibing to the store using a selector
    const cartItems = useSelector((store) => {
        // console.log(store);
        console.log(store.cart.items);
        return store.cart.items;
    });
    // console.log(cartItems);

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
                <li><Link to="/about" className='nav-link'>About Us</Link></li>
                <li><Link to="/contact" className='nav-link'>Contact Us</Link></li>
                <li className='cart'>
                    <Link to="/cart" className='cart-link'>
                        <i className="fa-solid fa-cart-shopping"></i>
                        <div className='cart-items'>{cartItems.length}</div>
                    </Link>
                </li>
                <button className='login-btn' onClick={handleLoginClick}>{value}</button>
            </ul>
        </div>
    )
}

export default Header;