import React from 'react';
import style from './Navbar.module.css'

const Navbar = () => {
   return <div className={style.nav}>
      <div className={style.item}>
         <a>Profile</a>
      </div>
      <div className={style.item}>
         <a>Messages</a>
      </div>
      <div className={style.item}>
         <a>News</a>
      </div>
      <div className={style.item}>
         <a>Music</a>
      </div>
      <div className={style.item}>
         <a>Settings</a>
      </div>
   </div>
}

export default Navbar;