import React from 'react';
import s from './Post-item.module.scss'
const PostItem = (props) => {
    return (
        <div className={s.post}>
            <img src='https://movies4maniacs.liberty.me/wp-content/uploads/sites/1218/2015/09/avatarsucks.jpg' />
            { props.message }
            <div>
                <span>like</span> { props.likesCount }
            </div>
        </div>
    )
}

export default PostItem;