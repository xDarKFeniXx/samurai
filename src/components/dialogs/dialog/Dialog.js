import React from 'react';
import s from './Dialog.module.scss'
import Message from "./message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../state";


const Dialog = ({messageData, newMessageBody, dispatch}) => {
    const messages = messageData.map(m => <Message key={m.id} text={m.message}/>)


    const onSendMessageClick = () => {
        dispatch(sendMessageCreator());
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        dispatch(updateNewMessageBodyCreator(body));
    }
    return (
        <div className={s.dialog}>
            <div>{messages}</div>
            <div>
                <div><textarea value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'/></div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Dialog;