import React from 'react';
import style from './NewPost.module.css';

let newPostElement = React.createRef();

const NewPost = (props) => {

   let addPost = () => {
      props.addingPostMethods.addPost();
   }

   const updateNewPostText = () => {
      const text = newPostElement.current.value;
      props.addingPostMethods.updateNewPostText(text);
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
            onChange={updateNewPostText}
         />

         <button
            className={style.send__button}
            onClick={addPost}>Send
         </button>
      </div>
   );
}

export default NewPost;