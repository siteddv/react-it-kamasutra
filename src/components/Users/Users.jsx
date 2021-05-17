import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';


const Users = (props) => {

   if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users")
         .then(response => {
            props.setUsers(response.data.items);
         });
   }

   let usersElements = props.users.map(user => (
      <div className={style.usersElement}>
         <div className={style.avatarFollow}>
            <div className={style.avatar}>
               <img className={style.avatarImg}
                  src={user.photos.small != null ? user.photos.small : "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png"}
                  alt={""}
               />
            </div>
            <button className={`${style.button} ${style.followButton}`} onClick={() => { props.followUnfollowUser(user.id) }}>{user.followed ? "Follow" : "Unfollow"}</button>
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

   return (
      <div className={style.users}>
         {usersElements}
         <button className={`${style.button} ${style.showMoreButton}`}>Show more</button>
      </div>
   );
}

export default Users;