import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
   return (
      <div className={style.post}>
         <div className={style.author__img}></div>
         <div className={style.content}>{props.content}</div>
      </div>)
}

export default Post;