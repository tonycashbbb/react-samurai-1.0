import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormControls/FormControls";
import {maxLengthCreator, required} from "../../../utils/validators";

const maxLength30 = maxLengthCreator(30)

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"messageBody"}
               component={Textarea}
               placeholder={"write your message"}
               validate={[required, maxLength30]}/>
      </div>
      <div>
        <button>Send message</button>
      </div>
    </form>
  )
}

export default reduxForm({form: "messageForm"})(MessageForm)
