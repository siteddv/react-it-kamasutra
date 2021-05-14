const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
   users: [
      { id: 1, followed: false, fullName: "Dimitrii", status: "I'm a programmer", location: { city: "Bishkek", country: "Kyrgyzstan" } },
      { id: 2, followed: false, fullName: "Nastya", status: "I'm a girl", location: { city: "Prigorodnoe", country: "Russia" } },
      { id: 3, followed: true, fullName: "Meerim", status: "I'm Meerim", location: { city: "KRSU", country: "Kyrgyzstan" } },
   ]
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: true };
               }
               return user;
            })
         };
      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: false };
               }
               return user;
            })
         };
      case SET_USERS:
         return {
            ...state,
            users: [...state.users, ...action.users]
         };
      default:
         return state;
   }

}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });
export const unfollowActionCreator = (userId) => ({ type: FOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;