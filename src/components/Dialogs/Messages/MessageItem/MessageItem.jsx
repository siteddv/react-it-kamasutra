import React from 'react';
import style from './MessageItem.module.css';

const MessageItem = (props) => {
   return (
      <div className={style.messageItem}>
         <div className={style.text}>{props.text}</div>
         <div className={style.date}>{props.date}</div>
      </div>
   );
}

export default MessageItem;