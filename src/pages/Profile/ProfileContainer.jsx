import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getProfile, getStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileAPI extends React.Component {
  refreshProfile = () => {
    let id = this.props.match.params.id
    id = id || this.props.authorisedUserId

    if (!id) {
      this.props.history.push("/login")
    }

    this.props.getProfile(id)
    this.props.getStatus(id)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.refreshProfile()
    }
  }

  render() {
    return <Profile {...this.props} isOwner={!this.props.match.params.id}/>
  }
}

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  userProfile: state.profilePage.userProfile,
  userStatus: state.profilePage.userStatus,
  authorisedUserId: state.auth.userId,
  isAuthorised: state.auth.isAuthorised,
})

export default compose(
  connect(mapStateToProps, {addPost, getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  withAuthRedirect,
)(ProfileAPI)
