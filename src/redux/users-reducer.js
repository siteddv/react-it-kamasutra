const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS"

let initialState = {
   users: [
      { id: 1, photoUrl: "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png", followed: false, fullName: "Dimitrii", status: "I'm a programmer", location: { city: "Bishkek", country: "Kyrgyzstan" } },
      { id: 2, photoUrl: "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png", followed: false, fullName: "Nastya", status: "I'm a girl", location: { city: "Prigorodnoe", country: "Russia" } },
      { id: 3, photoUrl: "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png", followed: true, fullName: "Meerim", status: "I'm Meerim", location: { city: "KRSU", country: "Kyrgyzstan" } },
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