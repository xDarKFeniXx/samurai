import React from 'react';
import styles from './Navigation.module.scss'
import {
    NavLink
} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/profile">Profile</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/mock">JSON PH</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/dialogs">Messages</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/users">Users</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/news">News</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/music">Music</NavLink>
            </div>
            <div className={styles.item}>
                <NavLink activeClassName={styles.active} to="/settings">Settings</NavLink>
            </div>
        </nav>
    );
};

export default Navigation;