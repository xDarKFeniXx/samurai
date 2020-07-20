import React from 'react';
import logo from "../../logo.svg";
import s from './Header.module.scss'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    // console.log(s)
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;