import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPostsContainer from "./my-posts/my-posts-containter";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    );
};

export default Profile;