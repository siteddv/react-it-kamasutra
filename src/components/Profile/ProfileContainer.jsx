import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/profile-reducer';
import Profile from './Profile';

const ProfileContainer = (props) => {

   const addingPostMethods = {
      updateNewPostText(text) {
         props.store.dispatch(updateNewPostTextActionCreator(text));
      },
      addPost() {
         props.store.dispatch(addPostActionCreator());
      }
   };

   const postsData = props.store.getState().profilePage.postsData;
   debugger;
   const newPostText = props.store.getState().profilePage.newPostText;

   return (
      <Profile
         newPostText={newPostText}
         postsData={postsData}
         addingPostMethods={addingPostMethods}
      />
   );
}

export default ProfileContainer;