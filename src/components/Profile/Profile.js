import React from 'react';
import styles from './Profile.module.scss'
import InfoUser from "./info-user";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {

    return (
        <div className={styles.profile}>

            <InfoUser
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer

            />

        </div>
    );
};

export default Profile;