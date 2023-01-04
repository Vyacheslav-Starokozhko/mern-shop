import React from 'react';
import Logo from '../../assets/img/logo.svg';
import "./navbar.scss";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header">
            <img src={Logo} alt="logo" className="header__logo"/>
            <nav className="navbar">
                <ul className="navbar__list site-navigation">
                    <li className="site-navigation__item">item</li>
                    <li className="site-navigation__item">item</li>
                    <li className="site-navigation__item">item</li>
                    <li className="site-navigation__item">item</li>
                    <li className="site-navigation__item">item</li>
                </ul>
            </nav>
            <ul className="header__button user-button">
                <li className="user-button__login"><Link to="/login">Sign in</Link></li>
                <li className="user-button__registration"><Link to="/registration">Registration</Link></li>
            </ul>
        </header>
    );
};

export default Navbar;