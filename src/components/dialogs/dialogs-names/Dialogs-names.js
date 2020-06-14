import React from 'react';
import s from './Dialogs-names.module.scss'
import Name from "./name";
const DialogsNames = ({dialogData}) => {
const names=dialogData.map(n=><Name id={n.id} name={n.name}/>)

    return (
        <div className={s.names}>
            {names}
        </div>
    );
};

export default DialogsNames;