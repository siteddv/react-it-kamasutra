import React from 'react';
import style from './Profile.module.css';
import CoverPhoto from './Cover/CoverPhoto';
import Info from './Info/Info';

const Profile = () => {
   return <div className={style.profile}>
      <CoverPhoto />
      <Info />
   </div>
}

export default Profile;