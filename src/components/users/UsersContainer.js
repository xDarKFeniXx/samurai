import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAc, setUsersAc, unfollowAc} from "../redux/users-reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followAc(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowAc(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);