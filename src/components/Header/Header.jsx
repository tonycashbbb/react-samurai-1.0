import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import userAvatar from '../../assets/images/userAvatar.png'

const Header = ({isAuthorised, userProfile, userPhoto, logout}) => {
  const fullName =  userProfile ? userProfile.fullName : ''

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <h3>React-Samurai</h3>
      </div>

      <div>
        <div className={s.login__block}>
          {isAuthorised
            ? <div className={s.user__row}>
              <div className={s.img}>
                <img src={userPhoto ? userPhoto : userAvatar} alt="avatar"/>
              </div>
              {fullName}
              <button onClick={logout}>Log out</button>
            </div>
            : <NavLink to={'/login'}>Login</NavLink>}
        </div>
      </div>

    </header>
  )
}

export default Header
