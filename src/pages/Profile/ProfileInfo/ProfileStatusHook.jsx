import React, {useEffect, useState} from "react";
import s from "./ProfileInfo.module.css";

const ProfileStatusHook = (props) => {

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect( () => {
    setStatus(props.status)
  }, [props.status])

  const onActivateEditStatus = () => {
    setEditMode(true)
  }

  const onDeactivateEditStatus = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      { editMode
        ? <div><input onBlur={onDeactivateEditStatus} autoFocus={true} onChange={onStatusChange} value={status}/></div>
        : <div className={s.status} onDoubleClick={onActivateEditStatus}>{props.status || 'no status'}</div> }
    </div>
  )
}

export default ProfileStatusHook
