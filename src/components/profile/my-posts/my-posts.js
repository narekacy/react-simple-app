import React from 'react';
import Post from '../post/post';
import s from './my-posts.module.css';

const MyPosts = () => {
  return (
    <div>
      <div>
        My posts
      </div>
      <textarea></textarea>
      <button>Add post</button>
      <div className={s.posts}>
        <Post message="Hi, how are you?" likesCount='21'/>
        <Post message="This is post!" likesCount='0'/>
      </div>
    </div>
  );
};

export default MyPosts;
