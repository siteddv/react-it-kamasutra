import React from 'react';
import style from './Feed.module.css';
import Post from './Post/Post';

const Feed = () => {

   let postsData = [
      { content: "Hey!" },
      { content: "Hi!" },
   ];

   let postElements = postsData.map(post => <Post content={post.content} />);

   return (
      <div className={style.feed}>
         {postElements}
      </div>
   );
}

export default Feed;