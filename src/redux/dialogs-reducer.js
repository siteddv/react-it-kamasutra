const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
   newMessageText: "",
   dialogsData: [
      {
         id: 1,
         companionName: "Dimitrii",
         messagesData: [
            { id: 1, messageText: "Hey!", dateOfChanging: new Date().toDateString() },
            { id: 2, messageText: "Bravo!", dateOfChanging: new Date().toDateString() },
         ],
      },
      {
         id: 2,
         companionName: "Meerim",
         messagesData: [
            { id: 1, messageText: "Привет от Мээрим!", dateOfChanging: new Date().toDateString() },
            { id: 2, messageText: "Bravo!", dateOfChanging: new Date().toDateString() },
         ],
      },
      {
         id: 3,
         companionName: "Nastya",
         messagesData: [
            { id: 1, messageText: "Привет от Насти!", dateOfChanging: new Date().toDateString() },
            { id: 2, messageText: "Bravo!", dateOfChanging: new Date().toDateString() },
         ],
      },
   ],
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         const currentCompanionIndex = Number(window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1));
         debugger;
         const currentCompanionMessages = state.dialogsData[currentCompanionIndex - 1].messagesData;
         const newMessage = {
            id: currentCompanionMessages[currentCompanionMessages.length - 1].id + 1,
            messageText: state.newMessageText,
            dateOfChanging: new Date().toDateString(),
         };
         return {
            ...state,
            newMessageText: "",
            dialogsData: state.dialogsData.map(user => {
               if (user.id === currentCompanionIndex) {
                  return {
                     ...user,
                     messagesData: [...user.messagesData, newMessage]
                  }
               }
               return user;
            })
         };
      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.text
         }
      default:
         return state;
   }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text });

export default dialogsReducer;