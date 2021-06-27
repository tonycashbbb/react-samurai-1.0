import React from "react";
import {Field, reduxForm} from "redux-form";
import {required, maxLengthCreator} from "../../../utils/validators";
import {Textarea} from "../FormControls/FormControls.jsx";

const maxLength10 = maxLengthCreator(10)

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"postText"}
               component={Textarea}
               placeholder={"Write your post"}
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

export default reduxForm({form: "postForm"})(PostForm)
