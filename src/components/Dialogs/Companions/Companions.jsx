import React from 'react';
import { NavLink } from 'react-router-dom';
import CompanionItem from './CompanionItem/CompanionItem';
import style from './Companions.module.css';

const Companions = () => {

   let companionsData = [
      { name: "Dimitrii" },
      { name: "Kanykei" },
      { name: "Meerim" },
   ];

   const startOfTheRoute = "/dialogs/dimitrii";

   let companionElements = companionsData.map(companion => <NavLink to={startOfTheRoute + companion.name} activeClassName={style.active}><CompanionItem name={companion.name} /></NavLink>)

   return (
      <div className={style.companions}>
         {companionElements}
      </div>
   );
}

export default Companions;