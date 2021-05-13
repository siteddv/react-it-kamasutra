import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/profile-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      postsData: state.profilePage.postsData,
      newPostText: state.profilePage.newPostText
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewPostText: (text) => {
         dispatch(updateNewPostTextActionCreator(text));
      },
      addPost: () => {
         dispatch(addPostActionCreator());
      }
   }
};

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;