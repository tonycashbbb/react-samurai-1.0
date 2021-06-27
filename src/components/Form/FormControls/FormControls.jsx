import React from "react";
import s from './FormControls.module.css'
import {Field} from "redux-form";

const FormControl = ({input, meta: {error, touched}, ...props}) => {
  const errorConditions = error && touched

  return (
    <div className={s.form__control + ' ' + (errorConditions && s.error)}>
      {props.children}
      {errorConditions && <div className={s.some__error}>{error}</div>}
    </div>
  )
}

export const Textarea = (props) => {
  return <FormControl {...props}>
    <textarea {...props.input} {...props}/>
  </FormControl>
}

export const Input = (props) => {
  return <FormControl {...props}>
    <input {...props.input} {...props}/>
  </FormControl>
}

export const createField = (inputProps, validators, component) => {
  return <Field {...inputProps}
                component={component}
                validate={validators}/>
}
