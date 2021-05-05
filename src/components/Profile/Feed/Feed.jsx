import React from 'react';
import style from './Feed.module.css';
import Post from './Post/Post';

const Feed = () => {

   let postsData = [
      { content: "Hey!" },
      { content: "Hi!" },
   ];

   return (
      <div className={style.feed}>
         <Post content={postsData[0].content} />
         <Post content={postsData[1].content} />
      </div>
   );
}

export default Feed;