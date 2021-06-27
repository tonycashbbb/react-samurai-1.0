import React from "react";
import s from './UserItem.module.css'
import userAvatar from '../../../assets/images/userAvatar.png'
import {NavLink} from "react-router-dom";

const UserItem = ({ user, avatar, follow, unfollow, followingInProgress }) => {
  return (
    <div className={s.user__item}>
      <div className={s.user__head}>
        <div className={s.user__img}>
          <NavLink to={`/profile/${user.id}`}><img src={avatar ? avatar : userAvatar} alt="ava"/></NavLink>
        </div>
        <div className={s.button}>
          {user.followed
            ? <button onClick={() => unfollow(user.id)} disabled={followingInProgress.some(id => id === user.id)}>Unfollow</button>
            : <button onClick={() => follow(user.id)} disabled={followingInProgress.some(id => id === user.id)}>Follow</button>}
        </div>
      </div>
      <div className={s.user__body}>
        <div className={s.user__name}>{user.name}</div>
        <div className={s.user__status}>{user.status ? user.status : 'no status'}</div>
      </div>
    </div>
  )
}

export default UserItem
