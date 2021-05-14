import React from 'react';
import { NavLink } from "react-router-dom";
import CompanionItem from './CompanionItem/CompanionItem';
import style from './Companions.module.css';

const Companions = (props) => {
   console.log(props);
   let companionElements = props.dialogsData.map(dialog => {
      return <NavLink key={dialog.id} to={"/messages/" + dialog.id} activeClassName={style.active} >
         <CompanionItem key={dialog.id} name={dialog.companionName} />
      </NavLink>;
   }

   );

   return (
      <div className={style.companions}>
         {companionElements}
      </div>
   );
}

export default Companions;