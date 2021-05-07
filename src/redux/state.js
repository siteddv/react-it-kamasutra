let state = {
   profilePage: {
      postsData: [
         { content: "Hey!" },
         { content: "Hi!" },
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

export default state;