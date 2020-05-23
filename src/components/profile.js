import React from 'react';
import s from './profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://i.pinimg.com/originals/b3/54/c7/b354c78a38bd30380d4f3882103b140f.jpg' />
      </div>
      <div>
        ava + decsription
        </div>
      <div>
        My posts
      </div>
        <div className={s.posts}>
          <div className={s.item}>
            post 1
        </div>
          <div className={s.item}>
            post 2
        </div>
        </div>
    </div>
  );
}

export default Profile;
