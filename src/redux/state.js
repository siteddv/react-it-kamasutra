const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

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
         newMessageText: "",
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
         this._state.profilePage.newPostText = action.text;
         this._callSubscriber(store);
      } else if (action.type === ADD_MESSAGE) {
         let newMessage = {
            messageText: this._state.messagesPage.newMessageText,
            dateOfChanging: new Date().toDateString(),
         };
         const companionName = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
         let currentCompanionIndex;
         for (let i = 0; i < this._state.messagesPage.dialogsData.length; ++i) {
            if (companionName === this._state.messagesPage.dialogsData[i].companionName.toLowerCase()) {
               currentCompanionIndex = i;
               break;
            }
         }

         this._state.messagesPage.dialogsData[currentCompanionIndex].messagesData.push(newMessage);
         this._state.messagesPage.newMessageText = "";

         this._callSubscriber(store);
         console.log(store);
         debugger;
      } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
         this._state.messagesPage.newMessageText = action.text;
         this._callSubscriber(store);
      }
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text });
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

window.state = store;
export default store;