import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPosts from "./my-posts/my-posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} />
        </div>
    );
};

export default Profile;
