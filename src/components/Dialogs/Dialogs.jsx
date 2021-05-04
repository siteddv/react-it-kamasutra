import React from 'react';
import Companions from './Companions/Companions';
import style from './Dialogs.module.css';
import Messages from './Messages/Messages';

const Dialogs = () => {
   return (
      <div className={style.dialogs}>
         <Companions />
         <Messages />
      </div>
   );
}

export default Dialogs;