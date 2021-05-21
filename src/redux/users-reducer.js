const FOLLOW_UNFOLLOW = "FOLLOW-UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USERS_COUNT = "SET-TOTAL-USERS-COUNT";
const SET_CURRENT_PAGE_NUMBER = "SET-CURRENT-PAGE-NUMBER";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";

let initialState = {
   users: [],
   totalUsersCount: 0,
   pageSize: 5,
   currentPageNumber: 1,
   isFetching: false
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
      case TOGGLE_IS_FETCHING:
         return {
            ...state,
            isFetching: action.isFetching
         }
      default:
         return state;
   }

}

export const followUnfollowUser = (userId) => ({ type: FOLLOW_UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPageNumber = (currentPageNumber) => ({ type: SET_CURRENT_PAGE_NUMBER, currentPageNumber });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;