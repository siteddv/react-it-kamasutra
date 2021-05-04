import React from 'react';
import style from './Info.module.css';
import Avatar from './Avatar/Avatar';
import Data from './Data/Data';

const Info = () => {
   return (
      <div className={style.info}>
         <Avatar />
         <Data />
      </div>
   );
}

export default Info;