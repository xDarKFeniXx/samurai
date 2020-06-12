import React from 'react';
import s from './Dialogs.module.scss'
import DialogsNames from "./dialogs-names";
import Dialog from "./dialog";
const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogsNames/>
            <Dialog/>
        </div>
    );
};

export default Dialogs;