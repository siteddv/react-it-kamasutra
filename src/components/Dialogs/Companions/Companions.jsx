import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanionItem from './CompanionItem/CompanionItem';
import style from './Companions.module.css';

const Companions = () => {
   return (
      <div className={style.companions}>
         <NavLink to="/dialogs/Dimitrii" activeClassName={style.active}><CompanionItem name="Dimitrii" /></NavLink>
         <NavLink to="/dialogs/Kanykei" activeClassName={style.active}><CompanionItem name="Kanykei" /></NavLink>
         <NavLink to="/dialogs/Meerim" activeClassName={style.active}><CompanionItem name="Meerim" /></NavLink>
      </div>
   );
}

export default Companions;