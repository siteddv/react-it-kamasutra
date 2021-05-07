import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
   return (
      <div className={style.nav}>
         <div className={style.item}>
            <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/messages" activeClassName={style.active}>Messages</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/news" activeClassName={style.active}>News</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
         </div>
         <div className={style.item}>
            <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
         </div>
      </div>
   );
}

export default Navbar;