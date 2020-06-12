import React from 'react';
import logo from "../../logo.svg";
import s from './Header.module.scss'
const Header = () => {
    // console.log(s)
    return (
        <header className={s.header}>
            <img src={logo}  alt="logo" />

        </header >
    );
};

export default Header;