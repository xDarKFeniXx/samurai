import React from 'react';
import styles from './Profile.module.scss'
import InfoUser from "./info-user";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {

    return (
        <div className={styles.profile}>

            <InfoUser profile={props.profile}/>
            <MyPostsContainer

            />

        </div>
    );
};

export default Profile;