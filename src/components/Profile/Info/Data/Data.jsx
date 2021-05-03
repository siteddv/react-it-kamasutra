import React from 'react';
import style from './Data.module.css';

const Data = () => {
   return <div className={style.data}>
      <div className={style.name}>Dimitrii Vinogradov</div>
      <div className={style.data__item}>Date of birth: 24 August, 2001</div>
      <div className={style.data__item}>City: Bishkek</div>
      <div className={style.data__item}>Education: KRSU '23</div>
      <div className={style.data__item}>Website: https://github.com/vino-gradom/</div>
   </div>
}

export default Data;