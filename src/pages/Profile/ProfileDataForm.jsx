import React from 'react';
import s from './Profile.module.css'
import {reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../components/Form/FormControls/FormControls";

const ProfileDataForm = ({handleSubmit, error}) => {

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.form__item}>
        Full name
        {createField({name: "fullName", placeholder: "Full name", type: "text"},[], Input)}
      </div>
      <div className={s.form__item}>
        About me
        {createField({name: "aboutMe", placeholder: "About me", type: "text"}, [], Input)}
      </div>
      <div className={s.form__item}>
        Looking for a job
        {createField({name: "lookingForAJob", type: "checkbox"}, [], Input)}
      </div>
      <div className={s.form__item}>
        Description
        {createField({name: "lookingForAJobDescription", placeholder: "Description", type: "text"}, [], Textarea)}
      </div>
      <div className={s.form__item}>
        VK
        {createField({name: "contacts.vk", placeholder: "VK", type: "text"}, [], Input)}
      </div>
      <div className={s.form__item}>
        Facebook
        {createField({name: "contacts.facebook", placeholder: "facebook", type: "text"}, [], Input)}
      </div>

      {error && <div className={s.error}>{error}</div>}

      <div className={s.form__item}>
        <button>Save</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "editProfile"
})(ProfileDataForm);
