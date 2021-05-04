import React from 'react';
import style from './CompanionItem.module.css';

const CompanionItem = (props) => {
   return (
      <div className={style.сompanion__item}>
         <div className={style.avatar}></div>
         <div className={style.name}>{props.name}</div>
      </div>
   );
}

export default CompanionItem;