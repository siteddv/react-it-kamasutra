import React from 'react';
import style from './SendMessageArea.module.css';

const SendMessageArea = (props) => {
   const messageTextUpdate = (e) => {
      const text = e.target.value;
      props.sendingMessageMethods.messageTextUpdate(text);
   }

   const sendMessage = () => {
      props.sendingMessageMethods.sendMessage();
   }

   return (
      <div className={style.sendMessageArea}>
         <textarea
            className={style.textarea}
            placeholder="Write something..."
            value={props.newMessageText}
            onChange={messageTextUpdate}
         />
         <button
            className={style.send__button}
            onClick={sendMessage}>Send
         </button>
      </div>
   );
}

export default SendMessageArea;