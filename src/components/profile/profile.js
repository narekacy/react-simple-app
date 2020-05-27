import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPostsContainer from "./my-posts/my-posts-containter";

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;