import React from "react";
import "./message.css"
import {avatarClasses} from "@mui/material";
import {format} from "date-fns";
const Message = ({message}) => {

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    date.setHours(date.getHours()-7);
    return format(date, 'dd/MM/yyyy');
  };
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    date.setHours(date.getHours()-7);
    return format(date, 'HH:mm');
  };
  const formattedDate = formatDate(message.updated_at);
  const formattedTime = formatTime(message.updated_at);

  return (
     /* <div className={`chat-layout`}>
        <div
            //kiem tra id de hien thi
            className={`chat-bubble ${message.is_from_customer === false ? "right" : ""}`}>
          <div className="chat-bubble__right">
            <p className="user-name">{message.is_from_customer}</p>
            <p className="user-message">{message.message}</p>
          </div>
        </div>
        <p className={`chat-time ${message.is_from_customer === false ? "right" : ""}`}>{formattedTime}</p>
      </div>*/

  <div className={`chat-layout ${message.is_from_customer === false ? "right" : ""}`}>
    <div className={`chat-bubble ${message.is_from_customer === false ? "right" : ""}`}>
      <div className="chat-bubble__right">
{/*
        <p className="user-name">{message.is_from_customer ? "Customer" : "Agent"}</p>
*/}
        <p className="user-message">{message.message}</p>
      </div>
    </div>
    <p className={`chat-time ${message.is_from_customer === false ? "right" : ""}`}>{formattedTime}</p>
  </div>
)
  ;
};
export default Message;