const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
   users: [

   ]
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW_UNFOLLOW:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userId) {
                  return { ...user, followed: !user.followed };
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

export const followUnfollowActionCreator = (userId) => ({ type: FOLLOW_UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;