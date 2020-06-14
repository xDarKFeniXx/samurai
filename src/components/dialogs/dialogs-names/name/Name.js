import React from 'react';
import {NavLink} from "react-router-dom";
import s from   './Name.module.scss'
const Name = ({name, id}) => {
    return (
        <NavLink
            to={`/dialogs/${id}`}
            acriveClassName={s.active}
        >{name}</NavLink>
    );
};

export default Name;