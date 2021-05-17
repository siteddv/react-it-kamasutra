import React from 'react';
import style from './Header.module.css'

class Header extends React.Component {
   render() {
      return (
         <header className={style.header}>
            <div className={style.img}></div>
         </header>
      );
   }

}

export default Header;