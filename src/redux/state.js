let rerenderEntireTree = () => {
   console.log("rendr");
}

let state = {
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
};

export const addPost = () => {
   let newPost = {
      content: state.profilePage.newPostText,
   };
   state.profilePage.postsData.push(newPost);
   state.profilePage.newPostText = "";
   rerenderEntireTree(state);
};

export const updateNewPostText = (postText) => {
   console.log(postText);
   state.profilePage.newPostText = postText;
   rerenderEntireTree(state);
};

export const observe = (observer) => {
   rerenderEntireTree = observer;
}

export default state;