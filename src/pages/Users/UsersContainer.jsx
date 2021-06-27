import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
  follow,
  unfollow,
  requestUsers
} from "../../redux/users-reducer";
import {compose} from "redux";
import {
  getCurrentPage,
  getIsFetching, getFollowingInProgress,
  getPageSize,
  getTotalUsersCount, getUsers,
} from "../../redux/users-selectors";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }

  setCurrentPage = (currentPage) => {
    this.props.requestUsers(currentPage, this.props.pageSize)
  }

  render() {
    const {
      users, follow, unfollow, pageSize, totalUsersCount, currentPage, isFetching,
      followingInProgress
    } = this.props

    return <Users users={users}
                  isFetching={isFetching}
                  follow={follow}
                  unfollow={unfollow}
                  totalUsersCount={totalUsersCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  setCurrentPage={this.setCurrentPage}
                  followingInProgress={followingInProgress}/>
  }
}

const mapStateToProps = (state) => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  totalUsersCount: getTotalUsersCount(state),
  currentPage: getCurrentPage(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state),
})

export default compose(
  connect(mapStateToProps, {follow, unfollow, requestUsers})
)(UsersAPI)
