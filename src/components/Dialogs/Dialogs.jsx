import React from 'react';
import Companions from './Companions/Companions';
import style from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

   return (

      <div className={style.dialogs}>
         <Companions dialogsData={props.messagesPage.dialogsData} />
         <Messages messagesPage={props.messagesPage} dispatch={props.dispatch} />
      </div >
   );
}

export default Dialogs;