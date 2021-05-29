import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
   dialogsPage: dialogsReducer,
   profilePage: profileReducer,
<<<<<<< Updated upstream
   sidebar: sidebarReducer,
   usersPage: usersReducer
=======
   sidebar: sidebarReducer
>>>>>>> Stashed changes
});

let store = createStore(reducers);

export default store;