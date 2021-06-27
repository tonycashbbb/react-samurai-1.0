import {connect} from "react-redux";
import Messages from "./Messages";
import {addMessage} from "../../redux/messages-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => ({
  dialogs: state.messagesPage.dialogs,
  messages: state.messagesPage.messages,
  newMessageText: state.messagesPage.newMessageText,
})

const mapDispatchToProps = (dispatch) => ({
  sendMessage: (messageBody) => {
    dispatch(addMessage(messageBody))
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect,
)(Messages)
