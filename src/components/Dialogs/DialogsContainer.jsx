import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../src/redux/dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

   const sendingMessageMethods = {
      messageTextUpdate(text) {
         debugger;
         props.store.dispatch(updateNewMessageTextActionCreator(text));
      },
      sendMessage() {
         props.store.dispatch(addMessageActionCreator());
      }
   };

   const dialogsData = props.store.getState().messagesPage.dialogsData;
   const newMessageText = props.store.getState().messagesPage.newMessageText;

   return (
      <Dialogs
         dialogsData={dialogsData}
         newMessageText={newMessageText}
         sendingMessageMethods={sendingMessageMethods}
      />
   );
}

export default DialogsContainer;