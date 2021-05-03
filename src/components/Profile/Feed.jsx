import React from 'react';
import style from './Profile.module.css';
import CoverPhoto from './Cover/CoverPhoto';
import Info from './Info/Info';
import NewPost from './NewPost/NewPost';

const Profile = () => {
   return <div className={style.profile}>
      <CoverPhoto />
      <Info />
      <NewPost />
   </div>
}

export default Profile;