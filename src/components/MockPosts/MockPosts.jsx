import React, {useEffect, useState} from 'react';
import s from './MockPosts.module.scss'
import {Card} from 'antd';
const MockPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setPosts(json))

    }, [])

    const mockPosts = posts.map(post => <Card
        key={post.id}
        title={post.title}
        headStyle={{fontSize: "20px", fontWeight: 800}}
        style={{margin: "5px"}}
    >
        <p>{post.body}</p>
    </Card>)
    return (
        <div className={s.wrapper}>

            {mockPosts}

        </div>
    );
};

export default MockPosts;