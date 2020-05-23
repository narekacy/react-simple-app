import React from 'react';
import s from './post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://static10.tgstat.ru/channels/_0/90/905639a85ebe6278d83d9baa4eea5169.jpg' className={s.img} />
          {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
