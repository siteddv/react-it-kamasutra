import React from 'react';
import style from './Users.module.css';


const Users = (props) => {
   let usersElements = props.users.map(user => (
      <div className={style.usersElement}>
         <div className={style.avatarFollow}>
            <div className={style.avatar}>
               <img className={style.avatarImg} src={user.photoUrl} alt={""} />
            </div>
            <button className={`${style.button} ${style.followButton}`} onClick={() => { props.followUnfollowUser(user.id) }}>{user.followed ? "Follow" : "Unfollow"}</button>
         </div>
         <div className={style.info}>
            <div className={style.info__about}>
               <div className={style.fullName}>{user.fullName}</div>
               <div className={style.status}>{user.status}</div>
            </div>
            <div className={style.info__location}>
               <div className={style.country}>{user.location.country}</div>
               <div className={style.city}>{user.location.city}</div>
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