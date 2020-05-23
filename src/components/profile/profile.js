import React from 'react';
import Post from './my-posts/my-posts';
import s from './profile.module.css';

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img src='https://steamcdn-a.akamaihd.net/steam/apps/585690/header.jpg?t=1490035625' />
      </div>
      <div>
        ava + decsription
        </div>
      <Post />
    </div>
  );
};

export default Profile;
