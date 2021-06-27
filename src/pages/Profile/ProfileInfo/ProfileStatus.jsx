import React from "react";
import s from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  onActivateEditStatus = () => {
    this.setState({
      editMode: true
    })
  }

  onDeactivateEditStatus = () => {
    this.setState({
      editMode: false
    })

    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value
    })
  }

  render() {
    return (
      <div>
        { this.state.editMode
          ? <div><input onBlur={this.onDeactivateEditStatus} autoFocus={true} onChange={this.onStatusChange} value={this.state.status}/></div>
          : <div className={s.status} onDoubleClick={this.onActivateEditStatus}>{this.props.status || 'no status'}</div> }
      </div>
    )
  }
}

export default ProfileStatus
