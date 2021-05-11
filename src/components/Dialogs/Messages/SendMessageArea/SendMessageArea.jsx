import React from 'react';
import style from './SendMessageArea.module.css';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../../../redux/dialogs-reducer';

const SendMessageArea = (props) => {
   const onMessageTextUpdate = (e) => {
      const text = e.target.value;
      props.dispatch(updateNewMessageTextActionCreator(text));
   }

   const addPost = () => {
      props.dispatch(addMessageActionCreator());
   }

   return (
      <div className={style.sendMessageArea}>
         <textarea
            className={style.textarea}
            placeholder="Write something..."
            value={props.messagesPage.newMessageText}
            onChange={onMessageTextUpdate}
         />
         <button
            className={style.send__button}
            onClick={addPost}>Send
         </button>
      </div>
   );
}

export default SendMessageArea;