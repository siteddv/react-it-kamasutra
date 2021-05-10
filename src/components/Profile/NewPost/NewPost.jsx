import React from 'react';
import style from './NewPost.module.css';

let newPostElement = React.createRef();

const NewPost = (props) => {

   let addPost = () => {
      props.addPost();
   }

   const onNewPostTextUpdate = () => {
      props.updateNewPostText(newPostElement.current.value);
   }


   return (
      <div className={style.NewPost}>
         <div className={style.header}>My posts</div>

         <textarea
            className={style.textarea}
            cols="150"
            rows="3"
            placeholder="What's new?"
            ref={newPostElement}
            value={props.newPostText}
            onChange={onNewPostTextUpdate}
         />

         <button
            className={style.send__button}
            onClick={addPost}>Send</button>
      </div>
   );
}

export default NewPost;