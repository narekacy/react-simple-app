import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPosts from "./my-posts/my-posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />

        </div>
    );
};

export default Profile;
