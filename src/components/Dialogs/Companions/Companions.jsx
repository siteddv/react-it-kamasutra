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

   let startOfTheRoute = "/dialogs/dimitrii";

   return (
      <div className={style.companions}>
         <NavLink to={startOfTheRoute + companionsData[0].name} activeClassName={style.active}><CompanionItem name={companionsData[0].name} /></NavLink>
         <NavLink to={startOfTheRoute + companionsData[1].name} activeClassName={style.active}><CompanionItem name={companionsData[1].name} /></NavLink>
         <NavLink to={startOfTheRoute + companionsData[2].name} activeClassName={style.active}><CompanionItem name={companionsData[2].name} /></NavLink>
      </div>
   );
}

export default Companions;