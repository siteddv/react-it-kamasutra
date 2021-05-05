import React from 'react';
import style from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';

const Messages = () => {

   let messagesData = [
      { text: "Hey!", date: new Date().toDateString() },
      { text: "Bravo!", date: new Date().toDateString() },
   ];

   return (
      <div className={style.messages}>
         <MessageItem text={messagesData[0].text} date={messagesData[0].date} />
         <MessageItem text={messagesData[1].text} date={messagesData[1].date} />
      </div>
   );
}

export default Messages;