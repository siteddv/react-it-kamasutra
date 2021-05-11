import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

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
      sidebar: {

      },
   },

   getState() {
      return this._state;
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(store);
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   }
};




window.state = store;
export default store;