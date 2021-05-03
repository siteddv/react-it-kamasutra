import React from 'react';
import style from './Data.module.css';

const Data = () => {
   return <div className={style.data}>
      <div className={style.name}>Dimitrii Vinogradov</div>
      <div className={style.data__item}><b>Date of birth:</b> 24 August, 2001</div>
      <div className={style.data__item}><b>City:</b> Bishkek</div>
      <div className={style.data__item}><b>Education:</b> KRSU '23</div>
      <div className={style.data__item}><b>Website:</b> https://github.com/vino-gradom/</div>
   </div>
}

export default Data;