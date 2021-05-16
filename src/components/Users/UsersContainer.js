import { followUnfollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
import { connect } from 'react-redux';
import Users from './Users';

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      followUnfollowUser: (userId) => {
         dispatch(followUnfollowActionCreator(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users));
      }
   }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;