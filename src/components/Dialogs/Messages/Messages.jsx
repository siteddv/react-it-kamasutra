import React from 'react';
import style from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';

const Messages = () => {
   return (
      <div className={style.messages}>
         <MessageItem text="Hey!" date="unknown" />
         <MessageItem text="Bravo!" date="unknown2" />
      </div>
   );
}

export default Messages;