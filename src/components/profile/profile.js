import React from 'react';
import ProfileInfo from "./profile-info/profile-info";
import MyPosts from "./my-posts/my-posts";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}
                     addPost={props.addPost} />

        </div>
    );
};

export default Profile;
