import React from "react";
import s from './DialogItem.module.css'

const DialogItem = ({ name, avatar }) => {
  return (
    <div className={s.dialog__item}>
      <img src={avatar} alt="ava"/>
      <div>{name}</div>
    </div>
  )
}

export default DialogItem
