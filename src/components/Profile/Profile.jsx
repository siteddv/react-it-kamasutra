import React from 'react';
import style from './Profile.module.css';
import CoverPhoto from './Cover/CoverPhoto';

const Profile = () => {
   return <div className={style.profile}>
      <CoverPhoto />
   </div>
}

export default Profile;