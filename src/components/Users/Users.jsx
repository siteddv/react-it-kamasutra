import React from 'react';
import style from './Users.module.css';


const Users = (props) => {
   debugger;
   let pagesNumber = Math.ceil(props.totalUsersCount / props.pageSize);

   let pageNumbersArray = [];

   for (let i = 1; i <= 10; ++i) {
      pageNumbersArray.push(i);
   }

   return (
      <div className={style.users} >
         <div className={style.pagesNumbers}>
            {pageNumbersArray.map(pageNumber => (
               <span className={`${style.pagesNumber} ${(props.currentPageNumber === style.pageNumber && style.activePagesNumber)}`} onClick={() => props.onPostChanged(pageNumber)}>
                  { pageNumber}
               </span >
            ))}
         </div>
         {
            props.users.map(user => (
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
            ))
         }
         < button className={`${style.button} ${style.showMoreButton}`}> Show more</ button>
      </div >
   )

}

export default Users;