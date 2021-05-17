import React from 'react';
import Companions from './Companions/Companions';
import style from './Dialogs.module.css';
import Messages from './Messages/Messages';

class Dialogs extends React.Component {

   render() {
      return (
         <div className={style.dialogs}>
            <Companions dialogsData={this.props.dialogsData} />
            <Messages
               dialogsData={this.props.dialogsData}
               newMessageText={this.props.newMessageText}
               messageTextUpdate={this.props.messageTextUpdate}
               sendMessage={this.props.sendMessage}
            />
         </div >
      );
   }

}

export default Dialogs;