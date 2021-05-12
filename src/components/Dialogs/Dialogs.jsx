import React from 'react';
import Companions from './Companions/Companions';
import style from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = (props) => {

   return (

      <div className={style.dialogs}>
         <Companions dialogsData={props.dialogsData} />
         <Messages dialogsData={props.dialogsData} newMessageText={props.newMessageText} dispatch={props.dispatch} sendingMessageMethods={props.sendingMessageMethods} />
      </div >
   );
}

export default Dialogs;