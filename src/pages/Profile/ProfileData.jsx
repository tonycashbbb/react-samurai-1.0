import React from 'react';
import s from "./ProfileInfo/ProfileInfo.module.css";

const ProfileData = ({
                       userProfile,
                       changeEditMode,
                       isOwner
                     }) => {
  return (
    <div>
      <ul className={s.content__profile_personal_data}>
        <li>About me: {userProfile.aboutMe}</li>
        <li>Job: {userProfile.lookingForAJob ? 'looking for a job' : 'not looking for a job'} </li>
        <li>Description: {userProfile.lookingForAJobDescription}</li>
        <li>VK: {userProfile.contacts.vk}</li>
        <li>Facebook: {userProfile.contacts.facebook}</li>
      </ul>
      {isOwner && <button onClick={changeEditMode}>Edit data</button>}
    </div>
  );
};

export default ProfileData;
