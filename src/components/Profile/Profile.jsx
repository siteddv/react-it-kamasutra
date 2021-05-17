import React from 'react';
import style from './Profile.module.css';
import CoverPhoto from './Cover/CoverPhoto';
import Info from './Info/Info';
import NewPost from './NewPost/NewPost';
import Feed from './Feed/Feed';

class Profile extends React.Component {

   render() {
      debugger;
      return (
         <div className={style.profile} >
            <CoverPhoto />
            <Info />
            <NewPost updateNewPostText={this.props.updateNewPostText} addPost={this.props.addPost} newPostText={this.props.newPostText} />
            <Feed postsData={this.props.postsData} />
         </div>
      );
   };

}

export default Profile;