import React, {useEffect, useState} from 'react';
import s from './MockPosts.module.scss'
const MockPosts = () => {
    const [posts, setPosts]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))

    })
    const mockposts=posts.map(post=>{
        return(
            <div className={s.item}>
                {post.title}
                <hr/>
                {post.body}
            </div>
        )
    })
    return (
        <div className={s.wrapper}>

            {mockposts}

        </div>
    );
};

export default MockPosts;