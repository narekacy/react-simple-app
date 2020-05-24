import React from 'react';
import Post from '../post/post';
import s from './my-posts.module.css';

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="Hi, how are you?" likesCount='21'/>
                <Post message="This is post!" likesCount='0'/>
            </div>
        </div>
    );
};

export default MyPosts;
