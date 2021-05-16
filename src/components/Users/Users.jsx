import React from 'react';
import style from './Users.module.css';


const Users = (props) => {
   // let users = [
   //    { id: 1, photoUrl: "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png", followed: false, fullName: "Dimitrii", status: "I'm a programmer", location: { city: "Bishkek", country: "Kyrgyzstan" } },
   //    { id: 2, photoUrl: "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png", followed: false, fullName: "Nastya", status: "I'm a girl", location: { city: "Prigorodnoe", country: "Russia" } },
   //    { id: 3, photoUrl: "https://webtous.ru/wp-content/uploads/2017/09/round-avatar.png", followed: true, fullName: "Meerim", status: "I'm Meerim", location: { city: "KRSU", country: "Kyrgyzstan" } },
   // ];
   // if (props.users.length === 0) {
   //    props.setUsers(users);
   // }
   let usersElements = props.users.map(user => (
      <div className={style.usersElement}>
         <div className={style.avatarFollow}>
            <div className={style.avatar}>
               <img className={style.avatar} src={user.photoUrl} className={style.avatarImg} alt={""} />
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