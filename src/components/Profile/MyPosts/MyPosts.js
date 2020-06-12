import React from 'react';
import s from './Myposts.module.scss'
import PostItem from "./post-item";
const MyPosts = () => {
    return (
        <div>
            <PostItem user={"Vano"} post={"что то"}/>
            <PostItem user={"Vano"} post={"что то"}/>
            <PostItem user={"Vano"} post={"что то"}/>

        </div>
    );
};

export default MyPosts;