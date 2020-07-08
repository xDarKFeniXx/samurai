import React from 'react';
import styles from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.wrapperPagination}>
            {pages.map(p => {
                return <div className={props.currentPage === p && styles.selectedPage}
                            onClick={(e) => {
                                props.onPageChanged(p);
                            }}>{p}</div>
            })}
        </div>
        <div className={styles.wrapper}>
            {
                props.users.map(u => <div key={u.id} className={styles.card}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.unfollow(u.id)
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.follow(u.id)
                                          }}>Follow</button>}

                        </div>
                    </div>
                    {/*<span>*/}
                    {/*<span>*/}
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {/*</span>*/}
                    {/*<span>*/}
                    {/*    <div>{"u.location.country"}</div>*/}
                    {/*    <div>{"u.location.city"}</div>*/}
                    {/*</span>*/}
                    {/*</span>*/}
                </div>)
            }
        </div>

    </div>
}

export default Users;