import React from 'react';
import style from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';

const Messages = () => {

   let messagesData = [
      { text: "Hey!", date: new Date().toDateString() },
      { text: "Bravo!", date: new Date().toDateString() },
   ];

   let messageElements = messagesData.map(message => <MessageItem text={message.text} date={message.date} />)

   return (
      <div className={style.messages}>
         {messageElements}
      </div>
   );
}

export default Messages;