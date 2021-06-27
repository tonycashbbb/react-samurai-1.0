import React from "react";
import s from './Login.module.css'
import ReduxLoginForm from "../../components/Form/LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = (props) => {
  const onSubmit = ({login, password, rememberMe}) => {
    props.login(login, password, rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/profile'} />
  }

  return (
    <div className={s.form}>
      <h3>Login</h3>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuthorised
})

export default connect(mapStateToProps, {login})(Login)
