import React from 'react';
import style from './Profile.module.css';
import CoverPhoto from './Cover/CoverPhoto';
import Info from './Info/Info';
import NewPost from './NewPost/NewPost';
import Feed from './Feed/Feed';

const Profile = (props) => {
   return (
      <div className={style.profile}>
         <CoverPhoto />
         <Info />
         <NewPost addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.profilePage.newPostText} />
         <Feed postsData={props.profilePage.postsData} />
      </div>
   );
}

export default Profile;