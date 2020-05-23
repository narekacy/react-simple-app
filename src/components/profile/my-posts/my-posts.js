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
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default MyPosts;
