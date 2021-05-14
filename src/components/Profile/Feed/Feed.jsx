import React from 'react';
import style from './Feed.module.css';
import Post from './Post/Post';

const Feed = (props) => {
   let postElements = props.postsData.map(post => <Post key={post.id} content={post.content} />);

   return (
      <div className={style.feed}>
         {postElements}
      </div>
   );
}

export default Feed;