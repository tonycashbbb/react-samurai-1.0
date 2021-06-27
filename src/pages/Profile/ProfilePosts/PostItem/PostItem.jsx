import React from "react";
import s from './PostItem.module.css'

const PostItem = ({ text, likesCount }) => {
  return (
    <div className={s.post__item}>
      <div className={s.flex}>
        <img src="https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg" alt="avatar"/>
        <div className={s.text}>
          <p>{text}</p>
        </div>
      </div>
      <div>Likes: {likesCount}</div>
    </div>
  )
}

export default PostItem
