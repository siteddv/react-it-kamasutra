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
      debugger;
      return this._state;
   },

   addPost() {
      let newPost = {
         content: this._state.profilePage.newPostText,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(store);
   },

   updateNewPostText(postText) {
      console.log(postText);
      this._state.profilePage.newPostText = postText;
      this._callSubscriber(store);
   },

   subscribe(observer) {
      this._callSubscriber = observer;
   }
}

window.state = store;
export default store;