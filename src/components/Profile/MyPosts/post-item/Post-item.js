import React from 'react';
import s from './Post-item.module.scss'
const PostItem = ({user, post}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.ava}>
                {user}
            </div>
            <div className={s.post}>
                {post}
            </div>
        </div>
    );
};

export default PostItem;