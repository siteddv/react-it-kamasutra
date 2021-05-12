import React from 'react';
import StoreContext from '../../StoreContext';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../src/redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = () => {

   return (
      <StoreContext.Consumer>
         {
            (store) => {

               const sendingMessageMethods = {
                  messageTextUpdate(text) {
                     debugger;
                     store.dispatch(updateNewMessageTextActionCreator(text));
                  },
                  sendMessage() {
                     store.dispatch(addMessageActionCreator());
                  }
               };
               console.log(store.getState());
               debugger;
               const dialogsData = store.getState().dialogsPage.dialogsData;
               const newMessageText = store.getState().dialogsPage.newMessageText;

               return (
                  <Dialogs
                     dialogsData={dialogsData}
                     newMessageText={newMessageText}
                     sendingMessageMethods={sendingMessageMethods}
                  />
               );
            }
         }
      </StoreContext.Consumer>

   );
}

export default DialogsContainer;