const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE_NUMBER = "SET-CURRENT-PAGE-NUMBER";

let initialState = {
   users: [],
   totalUsersCount: 0,
   pageSize: 5,
   currentPageNumber: 1
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
            users: [...action.users]
         };
      case SET_TOTAL_USERS_COUNT:
         return {
            ...state,
            totalUsersCount: action.totalUsersCount
         };
      case SET_CURRENT_PAGE_NUMBER:
         return {
            ...state,
            currentPageNumber: action.currentPageNumber
         }
      default:
         return state;
   }

}

export const followUnfollowActionCreator = (userId) => ({ type: FOLLOW_UNFOLLOW, userId });
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPageNumberActionCreator = (currentPageNumber) => ({ type: SET_CURRENT_PAGE_NUMBER, currentPageNumber });

export default usersReducer;