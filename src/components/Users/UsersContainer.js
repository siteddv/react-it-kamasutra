import { followUnfollowActionCreator, setCurrentPageNumberActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      totalUsersCount: state.usersPage.totalUsersCount,
      pageSize: state.usersPage.pageSize,
      currentPageNumber: state.usersPage.currentPageNumber
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      followUnfollowUser: (userId) => {
         dispatch(followUnfollowActionCreator(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users));
      },
      setTotalUsersCount: (totalUsersCount) => {
         dispatch(setTotalUsersCountActionCreator(totalUsersCount));
      },
      setCurrentPageNumber: (currentPageNumber) => {
         dispatch(setCurrentPageNumberActionCreator(currentPageNumber));
      }
   }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;