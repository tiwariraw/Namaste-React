import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import useOnlineStatus from '../utils.js/useOnlineStatus';

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
        <div className='flex'>
            <div className=''>
                <img
                    className=''
                    src={logo}
                    alt='logo'
                    onClick={handleReload}
                />
                <p className=''>Online status: {onlineStatus ? "🟢" : "🔴"}</p>
            </div>

            <ul className=''>
                {/* <li>Online: {onlineStatus ? "🟢" : "🔴"}</li> */}
                <li><Link to="/" className=''>Home</Link></li>
                <li><Link to="/about" className=''>About Us</Link></li>
                <li><Link to="/contact" className=''>Contact Us</Link></li>
                <li className=''><i className="fa-solid fa-cart-shopping"></i></li>
                <button className='login-btn' onClick={handleLoginClick}>{value}</button>
            </ul>
        </div>
    )
}

export default Header;