import React from 'react';
import styles from "./Users.module.scss";
import User from "./User";
import {Pagination} from "antd";

let Users = (props) => {

    const userOnPage = props.users.map(user => <User
        key={user.id}
        user={user}
        follow={props.follow}
        followingInProgress={props.followingInProgress}
        unfollow={props.unfollow}
    />)

    return <>

        {/*<Paginator currentPage={props.currentPage}*/}
        {/*           onPageChanged={props.onPageChanged}*/}
        {/*           totalItemsCount={props.totalUsersCount}*/}
        {/*           pageSize={props.pageSize}*/}
        {/*/>*/}
        <div className={styles.wrapperPagination}>
            <Pagination
                total={props.totalUsersCount}
                onChange={props.onPageChanged}
                defaultPageSize={props.pageSize}
                showSizeChanger={false}
                current={props.currentPage}
            />
        </div>
        <div className={styles.wrapper}>
            {userOnPage}
        </div>

    </>
}

export default Users;