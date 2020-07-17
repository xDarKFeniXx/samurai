import React from 'react';
import s from './Info-user.module.scss'
import Preloader from "../../common/preloader";
import ProfileStatus from "./ProfileStatus";

const InfoUser = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large} alt=""/>
            <div className="ava">{props.profile.fullName}</div>
            <div className="descr">{props.profile.aboutMe}</div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
};

export default InfoUser;