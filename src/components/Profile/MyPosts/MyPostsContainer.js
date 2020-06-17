import React from 'react';
import s from './Myposts.module.scss'
import PostItem from "./post-item";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../state";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {

        props.store.dispatch(addPostActionCreator());

    }

    let onPostChange = (text) => {

        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            addPost={addPost}
            updateNewPostText={onPostChange}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;