import React from 'react';
import style from './Feed.module.css';
import Post from './Post/Post';

const Feed = () => {
   return (
      <div className={style.feed}>
         <Post content="Hey!" />
         <Post content="Hi!" />
      </div>
   );
}

export default Feed;