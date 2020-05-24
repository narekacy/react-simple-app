import React from 'react';
import s from './profile-info.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://steamcdn-a.akamaihd.net/steam/apps/585690/header.jpg?t=1490035625'/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

export default ProfileInfo;
