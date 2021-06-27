import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import ProfilePosts from "./ProfilePosts/ProfilePosts";

const Profile = (props) => {

  return (
    <div className={s.content}>
      <ProfileInfo userProfile={props.userProfile}
                   savePhoto={props.savePhoto}
                   userStatus={props.userStatus}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   saveProfile={props.saveProfile}/>
      <ProfilePosts posts={props.posts}
                    addPost={props.addPost}/>
    </div>
  )
}

export default Profile;
