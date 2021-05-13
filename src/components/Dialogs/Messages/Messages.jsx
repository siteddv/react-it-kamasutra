import React from 'react';
import { Route } from "react-router-dom";
import style from './Messages.module.css';
import MessageItem from './MessageItem/MessageItem';
import SendMessageArea from './SendMessageArea/SendMessageArea';

const Messages = (props) => {

   let messageElements = props.dialogsData.map(dialog =>
      <Route path={"/messages/" + dialog.companionName.toLowerCase()}
         render={() => dialog.messagesData.map(message =>
            <div>
               <MessageItem
                  text={message.messageText}
                  date={message.dateOfChanging}
               />
               <SendMessageArea
                  newMessageText={props.newMessageText}
                  messageTextUpdate={props.messageTextUpdate}
                  sendMessage={props.sendMessage}
               />
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