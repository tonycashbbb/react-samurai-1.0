import React, {useState} from 'react'
import s from './ProfileInfo.module.css'
import Spinner from "../../../components/Spinner/Spinner";
import ProfileStatusHook from "./ProfileStatusHook";
import userAvatar from '../../../assets/images/userAvatar.png'
import ProfileData from "../ProfileData";
import ProfileDataForm from "../ProfileDataForm";

const ProfileInfo = ({ userProfile, userStatus, updateStatus, isOwner, savePhoto, saveProfile }) => {
  const [editMode, setEditMode] = useState(false)

  if (!userProfile) {
    return <Spinner />
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  const changeEditMode = () => {
    setEditMode(true)
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
      .then(() => setEditMode(false))
  }

  return (
    <div className={s.content__profile}>
      <div className={s.content__profile_avatar}>
        <img src={userProfile.photos.large || userAvatar} alt="avatar"/>
        {isOwner && <div className={s.loadfile}><h4>Загрузить фото</h4><div><input type="file" onChange={mainPhotoSelected}/></div></div>}
      </div>
      <div className={s.content__profile_data}>
        <div className={s.content__profile_name}>{userProfile.fullName}</div>

        <ProfileStatusHook status={userStatus}
                           updateStatus={updateStatus}/>

        {!editMode
          ? <ProfileData userProfile={userProfile}
                         isOwner={isOwner}
                         changeEditMode={changeEditMode}/>
          : <ProfileDataForm initialValues={userProfile}
                             onSubmit={onSubmit}/>}
      </div>
    </div>
  )
}

export default ProfileInfo;
