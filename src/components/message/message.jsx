import React from "react";
import "./message.css"
const Message = ({message}) => {

  return (
    <div className={`chat-layout`}> 
    <div
    //kiem tra id de hien thi
      className={`chat-bubble ${true ? "right" : ""}`}> 
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.body}</p>
      </div>
    </div>
        <p className={`chat-time ${true ? "right" : ""}`}>12:00</p>
    </div>
  );
};
export default Message;