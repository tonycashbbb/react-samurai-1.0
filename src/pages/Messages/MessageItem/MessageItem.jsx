import React from "react";
import s from './MessageItem.module.css'

const MessageItem = ({ text }) => {
  return (
    <div className={s.message__item}>
      <p>{text}</p>
    </div>
  )
}

export default MessageItem
