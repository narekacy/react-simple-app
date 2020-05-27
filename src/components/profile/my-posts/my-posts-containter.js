import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./my-posts";
import {connect} from "react-redux";
import {updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewMessageBodyCreator(text);
            return dispatch(action);
        },
        addPost: () => {
            return dispatch(addPostActionCreator());;
        }
    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
