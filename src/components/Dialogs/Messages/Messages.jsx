import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import style from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';

const Messages = (props) => {


   let messageElements = props.dialogsData.map(dialog =>
      <Route path={"/messages/" + dialog.companionName.toLowerCase()}
         render={() =>
            dialog.messagesData.map(message =>
               <MessageItem text={message.messageText} date={message.dateOfChanging} />)
         }
      />
   );

   return (

      <div className={style.messages}>
         {messageElements}
      </div>
   );
}

export default Messages;