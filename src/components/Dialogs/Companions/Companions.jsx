import React from 'react';
import { NavLink } from "react-router-dom";
import CompanionItem from './CompanionItem/CompanionItem';
import style from './Companions.module.css';

const Companions = (props) => {

   let companionElements = props.dialogsData.map(dialog =>
      <NavLink to={"/messages/" + dialog.companionName.toLowerCase()} activeClassName={style.active} >
         <CompanionItem name={dialog.companionName} />
      </NavLink>
   );

   return (
      <div className={style.companions}>
         {companionElements}
      </div>
   );
}

export default Companions;