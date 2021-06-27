import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

const mapStateToPropsForRedirect = (state) => ({
  isAuthorised: state.auth.isAuthorised,
})

export const withAuthRedirect = (Component) => {

  const RedirectComponent = (props) => {
    if (!props.isAuthorised) return <Redirect to={"/login"} />

    return <Component {...props}/>
  }

  return connect(mapStateToPropsForRedirect, {})(RedirectComponent)
}
