import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPosts from "./my-posts/my-posts";
import s from './profile.module.css';

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};

export default Profile;
