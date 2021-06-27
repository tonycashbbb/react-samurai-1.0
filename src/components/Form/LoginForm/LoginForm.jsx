import React from "react";
import s from './LoginForm.module.css'
import {reduxForm} from "redux-form";
import {createField, Input} from "../FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
  return (
    <form className={s.form}
          onSubmit={props.handleSubmit}>
      <div className={s.form__item}>
        {createField({name: "login", placeholder: "login", type: "text"}, [required, maxLength30], Input)}
      </div>
      <div className={s.form__item}>
        {createField({name: "password", placeholder: "password", type: "password"}, [required, maxLength30], Input)}
      </div>
      <div className={s.form__item}>
        {createField({name: "rememberMe", type: "checkbox"}, [], Input)}
        <div className={s.remember}>remember me</div>
      </div>
      { props.error && <div className={s.form__error}>
        {props.error}
      </div> }
      <div className={s.form__item}>
        <button>Log in</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'login',
})(LoginForm)
