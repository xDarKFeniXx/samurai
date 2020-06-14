import React from 'react';
import s from './Dialogs.module.scss'
import DialogsNames from "./dialogs-names";
import Dialog from "./dialog";
const Dialogs = (props) => {
    const {dialogData, messageData, newMessageBody}=props;


    return (
        <div className={s.dialogs}>
            <DialogsNames dialogData={dialogData}/>
            <Dialog messageData={messageData} dispatch={props.dispatch} newMessageBody={newMessageBody}/>
        </div>
    );
};

export default Dialogs;