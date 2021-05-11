const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let store = {
   _callSubscriber() {
      console.log("rendr");
   },

   _state: {
      profilePage: {
         newPostText: "",
         postsData: [
            { content: "Hey!" },
         ],
      },
      messagesPage: {
         dialogsData: [
            {
               companionName: "Dimitrii",
               messagesData: [
                  { messageText: "Hey!", dateOfChanging: new Date().toDateString() },
                  { messageText: "Bravo!", dateOfChanging: new Date().toDateString() },
               ],
            },
            {
               companionName: "Meerim",
               messagesData: [
                  { messageText: "Привет от Мээрим!", dateOfChanging: new Date().toDateString() },
                  { messageText: "Bravo!", dateOfChanging: new Date().toDateString() },
               ],
            },
            {
               companionName: "Nastya",
               messagesData: [
                  { messageText: "Привет от Насти!", dateOfChanging: new Date().toDateString() },
                  { messageText: "Bravo!", dateOfChanging: new Date().toDateString() },
               ],
            },
         ],
      },
   },

   getState() {
      return this._state;
   },

   dispatch(action) {
      if (action.type === ADD_POST) {
         let newPost = {
            content: this._state.profilePage.newPostText,
         };
         this._state.profilePage.postsData.push(newPost);
         this._state.profilePage.newPostText = "";
         this._callSubscriber(store);
      } else if (action.type === UPDATE_NEW_POST_TEXT) {
         this._state.profilePage.newPostText = action.postText;
         this._callSubscriber(store);
      }
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, postText: text });

window.state = store;
export default store;