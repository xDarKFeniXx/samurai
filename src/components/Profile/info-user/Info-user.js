import React from 'react';
import s from './Info-user.module.scss'
import Preloader from "../../common/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.png";

const InfoUser = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    return (
        <div className={s.wrapper}>
            <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>
            {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            <div className="ava">{props.profile.fullName}</div>
            <div className="descr">{props.profile.aboutMe}</div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
    );
};

export default InfoUser;