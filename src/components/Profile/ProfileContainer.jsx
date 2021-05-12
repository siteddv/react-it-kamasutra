import React from 'react';
import StoreContext from '../../StoreContext';
import { addPostActionCreator, updateNewPostTextActionCreator } from './../../redux/profile-reducer';
import Profile from './Profile';

const ProfileContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {

               const addingPostMethods = {
                  updateNewPostText(text) {
                     store.dispatch(updateNewPostTextActionCreator(text));
                  },
                  addPost() {
                     store.dispatch(addPostActionCreator());
                  }
               };
               debugger;
               console.log(store.getState());
               const postsData = store.getState().profilePage.postsData;
               const newPostText = store.getState().profilePage.newPostText;

               return (
                  <Profile
                     newPostText={newPostText}
                     postsData={postsData}
                     addingPostMethods={addingPostMethods}
                  />
               );
            }
         }

      </StoreContext.Consumer>
   );
}

export default ProfileContainer;