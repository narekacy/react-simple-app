import React from 'react';
import s from './profile-info.module.css';
import Preloader from "../../common/pre-loader";
import ProfileStatus from "./profile-status";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img src='https://steamcdn-a.akamaihd.net/steam/apps/585690/header.jpg?t=1490035625'/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={"1"}/>
            </div>
        </div>
    );
};

export default ProfileInfo;
