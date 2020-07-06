import React from 'react';
import styles from "./Users.module.scss";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from 'axios'
let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p);
                             }}>{p}</span>
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
                                              props.toggleFollowingProgress(true, u.id);
                                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "e5aea533-65e5-4d82-8722-3543ae648db3"
                                                  }
                                              })
                                                  .then(response => {
                                                      if (response.data.resultCode === 0) {
                                                          props.unfollow(u.id);
                                                      }
                                                      props.toggleFollowingProgress(false, u.id);
                                                  });
                                          }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.toggleFollowingProgress(true, u.id);
                                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                  withCredentials: true,
                                                  headers: {
                                                      "API-KEY": "e5aea533-65e5-4d82-8722-3543ae648db3"
                                                  }
                                              })
                                                  .then(response => {
                                                      if (response.data.resultCode === 0) {
                                                          props.follow(u.id);
                                                      }
                                                      props.toggleFollowingProgress(false, u.id);

                                                  });
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