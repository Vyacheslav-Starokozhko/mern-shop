import React from 'react';
import Logo from '../../assets/img/logo.svg';
import "./navbar.scss";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../reducers/userReducer";

const Navbar = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch();
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

                {!isAuth && <li className="user-button__login"><Link to="/login">Sign in</Link></li>}
                {!isAuth && <li className="user-button__registration"><Link to="/registration">Registration</Link></li>}
                {isAuth && <li className="user-button__out" onClick={() => dispatch(logoutUser())}>Log Out</li>}
            </ul>
        </header>
    );
};

export default Navbar;