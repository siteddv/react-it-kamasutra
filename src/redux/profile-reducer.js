const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
   newPostText: "",
   postsData: [
      { content: "Hey!" },
   ],
};

const profileReducer = (state = initialState, action) => {
   let stateCopy = { ...state };
   switch (action.type) {
      case ADD_POST:
         const newPost = {
            content: state.newPostText,
         };
         stateCopy.postsData = [...state.postsData];
         console.log(stateCopy.postsData);
         debugger;
         stateCopy.postsData.push(newPost);
         console.log(stateCopy.postsData);

         stateCopy.newPostText = "";
         return stateCopy;
      case UPDATE_NEW_POST_TEXT:
         stateCopy.newPostText = action.text;
         return stateCopy;
      default:
         return stateCopy;
   }

}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });

export default profileReducer;