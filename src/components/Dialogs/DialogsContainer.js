import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      dialogsData: state.dialogsPage.dialogsData,
      newMessageText: state.dialogsPage.newMessageText
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      messageTextUpdate: (text) => {
         dispatch(updateNewMessageTextActionCreator(text));
      },
      sendMessage: () => {
         dispatch(addMessageActionCreator());
      }
   }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;