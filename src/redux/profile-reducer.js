const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
   newPostText: "",
   postsData: [
      { content: "Hey!" },
   ],
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            content: state.newPostText,
         };
         return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: ""
         }
      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.text
         }
      default:
         return state;
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;