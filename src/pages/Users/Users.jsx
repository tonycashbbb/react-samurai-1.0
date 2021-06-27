import React from "react";
import s from './Users.module.css'
import UserItem from "./UserItem/UserItem";
import Spinner from "../../components/Spinner/Spinner";
import Paginator from "../../components/Paginator/Paginator";

const Users = ({
                 users, follow, unfollow, totalUsersCount, pageSize,
                 currentPage, setCurrentPage, isFetching, followingInProgress
               }) => {

  return (
    <>
      <Paginator totalItemsCount={totalUsersCount}
                 pageSize={pageSize}
                 currentPage={currentPage}
                 setCurrentPage={setCurrentPage}/>
      {!isFetching
        ? <div className={s.users}>
            {users.map(user => <UserItem key={user.id}
                                         user={user}
                                         follow={follow}
                                         unfollow={unfollow}
                                         avatar={user.photos.large}
                                         followingInProgress={followingInProgress}/>)}
          </div>
        : <Spinner/>
      }
    </>
  )
}

export default Users
