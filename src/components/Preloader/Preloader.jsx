import React from 'react';
import style from './Preloader.module.css';


class Preloader extends React.Component {

   render() {
      debugger;
      return (
         <div className={style.preloader} >
            <img className={style.preloader__img} src={"https://i.pinimg.com/originals/f6/06/cb/f606cbf26c0a18898b96ef6857953a75.gif"} alt="" />
         </div>
      );
   };

}

export default Preloader;