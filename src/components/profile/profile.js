import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPostsContainer from "./my-posts/my-posts-containter";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    );
};

export default Profile;