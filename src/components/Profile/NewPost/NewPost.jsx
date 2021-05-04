import React from 'react';
import style from './NewPost.module.css';

const NewPost = () => {
   return (
      <div className={style.NewPost}>
         <div className={style.header}>My posts</div>
         <textarea className={style.textarea} cols="150" rows="3" placeholder="What's new?"></textarea>
         <button className={style.send__button}>Send</button>
      </div>
   );
}

export default NewPost;