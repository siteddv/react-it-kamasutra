import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';


class Users extends React.Component {

   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            this.props.setUsers(response.data.items);
         });
   }

   render() {
      return (
         <div className={style.users} >
            { this.usersElements}
            < button className={`${style.button} ${style.showMoreButton}`}> Show more</ button>
         </div >
      );
   }

   usersElements = this.props.users.map(user => (
      <div className={style.usersElement}>
         <div className={style.avatarFollow}>
            <div className={style.avatar}>
               <img className={style.avatarImg}
                  src={user.photos.small != null ? user.photos.small : "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png"}
                  alt={""}
               />
            </div>
            <button className={`${style.button} ${style.followButton}`} onClick={() => { this.props.followUnfollowUser(user.id) }}>{user.followed ? "Follow" : "Unfollow"}</button>
         </div>
         <div className={style.info}>
            <div className={style.info__about}>
               <div className={style.fullName}>{user.name}</div>
               <div className={style.status}>{user.status}</div>
            </div>
            <div className={style.info__location}>
               <div className={style.country}>Kyrgyzstan</div>
               <div className={style.city}>Bishkek</div>
            </div>
         </div>
      </div>
   ));
}

export default Users;