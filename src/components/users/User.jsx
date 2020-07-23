import React from 'react';
import styles from "./Users.module.scss";
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";

const User = ({user, followingInProgress, unfollow, follow}) => {
    // const status=user.status.slice(0, 15)
    // console.log(status)
    return (
        <div className={styles.card}>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      unfollow(user.id)
                                  }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      follow(user.id)
                                  }}>Follow</button>}

                </div>
            </div>
            {/*<span>*/}
            {/*<span>*/}
            <div>{user.name}</div>
            <div>{user.status}</div>
            {/*</span>*/}
            {/*<span>*/}
            {/*    <div>{"user.location.country"}</div>*/}
            {/*    <div>{"user.location.city"}</div>*/}
            {/*</span>*/}
            {/*</span>*/}
        </div>
    );
};

export default User;