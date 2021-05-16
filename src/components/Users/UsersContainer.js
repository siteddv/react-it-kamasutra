import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
import Profile from './Profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
   return {
      users: state.users
   }
};
let mapDispatchToProps = (dispatch) => {
   return {
      folowUser: (userId) => {
         dispatch(followActionCreator(userId));
      },
      unfolowUser: (userId) => {
         dispatch(unfollowActionCreator(userId));
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users));
      }
   }
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default UsersContainer;