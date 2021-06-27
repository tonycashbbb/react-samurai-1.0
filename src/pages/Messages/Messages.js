import React from "react";
import s from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import MessageForm from "../../components/Form/MessageForm/MessageForm";

const Messages = ({dialogs, messages, sendMessage}) => {

  const onSendMessage = (message) => {
    sendMessage(message.messageBody)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.dialogs}>
        {dialogs.map(item => <DialogItem key={item.id} name={item.name} avatar={item.avatar}/>)}
      </div>
      <div className={s.messages}>
        <div className={s.message__items}>
          {messages.map(message => <MessageItem key={message.id} text={message.text}/>)}
        </div>
        <MessageForm onSubmit={onSendMessage}/>
      </div>
    </div>
  )
}

export default Messages
