import React from 'react';
import Logo from '../../assets/img/logo.svg';
import "./navbar.scss";

const Navbar = () => {
    return (
        <header className="header">
            <img src={Logo} alt="logo" className="header__logo"/>
            <nav className="navbar"></nav>
            <ul className="header__button user-button">
                <li className="user-button__login">Sign in</li>
                <li className="user-button__registration">Registration</li>
            </ul>
        </header>
    );
};

export default Navbar;