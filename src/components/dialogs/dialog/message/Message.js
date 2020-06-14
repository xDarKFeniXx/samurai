import React from 'react';
import s from './Message.module.scss'
const Message = ({text}) => {
    return (
        <div className={s.message}>
            {text}
        </div>
    );
};

export default Message;