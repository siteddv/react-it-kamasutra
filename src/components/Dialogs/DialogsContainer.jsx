import React from 'react';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../src/redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialogsData: state.dialogsPage.dialogsData,
      newMessageText: state.dialogsPage.newMessageText
   }
}

let mapDispatchToProps = (dispatch) => {
   return {
      sendingMessageMethods: {
         messageTextUpdate: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
         },
         sendMessage: () => {
            dispatch(addMessageActionCreator());
         }
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;