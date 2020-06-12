import React from 'react';
import styles from './Profile.module.scss'
import MyPosts from "./MyPosts";
import InfoUser from "./info-user";
const Profile = () => {
    return (
        <div className={styles.profile}>
            <img src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt=""/>
            <InfoUser/>
            <MyPosts/>

        </div>
    );
};

export default Profile;