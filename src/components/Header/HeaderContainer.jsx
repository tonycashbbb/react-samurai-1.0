import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderAPI extends React.Component {
  render() {
    return <Header {...this.props} />
  }
}

const mapStateToProps = (state) => ({
  isAuthorised: state.auth.isAuthorised,
  userProfile: state.profilePage.userProfile,
  userPhoto: state.auth.userPhoto,
})

export default connect(mapStateToProps, {logout})(HeaderAPI)
