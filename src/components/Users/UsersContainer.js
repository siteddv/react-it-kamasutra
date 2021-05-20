import { followUnfollowActionCreator, setCurrentPageNumberActionCreator, setTotalUsersCountActionCreator, setUsersActionCreator } from '../../redux/users-reducer';
import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

   componentDidMount() {
      debugger;
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            debugger;
            this.props.setTotalUsersCount(response.data.totalCount);
            debugger;
         });
      debugger;
   };


   onPostChanged = (pageNumber) => {
      debugger;
      this.props.setCurrentPageNumber(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPageNumber}&count=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
            debugger;
         });
      debugger;
   }

   render() {
      debugger;
      return (
         <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPageNumber={this.props.currentPageNumber}
            onPostChanged={this.onPostChanged}
            users={this.props.users}
            followUnfollowUser={this.props.followUnfollowUser}
         />
      )
   }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);