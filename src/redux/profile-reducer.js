const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const profileReducer = (state, action) => {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            content: state.newPostText,
         };
         state.postsData.push(newPost);
         state.newPostText = "";
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.text;
         return state;
      default:
         return state;
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;