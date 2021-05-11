import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import style from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import SendMessageArea from './SendMessageArea/SendMessageArea';

const Messages = (props) => {

   let messageElements = props.messagesPage.dialogsData.map(dialog =>
      <Route path={"/messages/" + dialog.companionName.toLowerCase()}
         render={() => dialog.messagesData.map(message =>
            <div>
               <MessageItem text={message.messageText} date={message.dateOfChanging} />
               <SendMessageArea messagesPage={props.messagesPage} dispatch={props.dispatch} />
            </div>
         )
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