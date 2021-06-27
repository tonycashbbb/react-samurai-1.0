import React from "react";
import s from './ProfilePosts.module.css'
import PostItem from "./PostItem/PostItem";
import PostForm from "../../../components/Form/PostForm/PostForm";

const ProfilePosts = React.memo(({posts, addPost}) => {

  const onAddPost = (formData) => {
    addPost(formData.postText)
  }

  return (
    <div>
      <div className={s.form}>
        <PostForm onSubmit={onAddPost}/>
      </div>
      <div className={s.posts}>
        <h3>Posts: </h3>
        {posts.map(post => <PostItem key={post.id}
                                     text={post.text}
                                     likesCount={post.likesCount}/>)}
      </div>
    </div>
  )
})

export default ProfilePosts
