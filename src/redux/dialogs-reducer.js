const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_MESSAGE:
         const newMessage = {
            messageText: state.newMessageText,
            dateOfChanging: new Date().toDateString(),
         };
         const companionName = window.location.pathname.slice(window.location.pathname.lastIndexOf('/') + 1);
         let currentCompanionIndex;
         for (let i = 0; i < state.dialogsData.length; ++i) {
            if (companionName === state.dialogsData[i].companionName.toLowerCase()) {
               currentCompanionIndex = i;
               break;
            }
         }
         let newState = {
            ...state,
            newMessageText: "",
            dialogsData: [...state.dialogsData],
         };
         console.log(newState.dialogsData);
         debugger;
         newState.dialogsData[currentCompanionIndex].messagesData.push(newMessage);
         return newState;
      case UPDATE_NEW_MESSAGE_TEXT:
         debugger;
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