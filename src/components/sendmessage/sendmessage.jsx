// import React from "react";
// import { useState } from "react";
// import "./sendmessage.css"
// const SendMessage = () => {
//     const [message, setMessage] = useState("");
//     const sendMessage = async (event) => {
//         event.preventDefault();
//         if (message.trim() === "") {
//           alert("Enter valid message");
//           return;
//         }
//   return (
//     <form onSubmit={(event)=> sendMessage(event)} className="send-message">
//       <label htmlFor="messageInput" hidden>
//         Enter Message
//       </label>
//       <input
//         id="messageInput"
//         name="messageInput"
//         type="text"
//         className="form-input__input"
//         placeholder="type message..."
//         value={message}
//         onChange={(e)=> setMessage(e.target.value)}
//       />
//       <button type="submit">Send</button>
//     </form>
//   );
// };
// }
// export default SendMessage;

import React from "react";
import { useState } from "react";
import "./sendmessage.css"
import {socket} from "../../socket-io";
const SendMessage = ({ws,onSendMessage,selectedMessage}) => {
  const [message, setMessage] = useState("");
  const sendMessage2 = async (event) => {
      const roomId = selectedMessage ? selectedMessage.id : null;

    event.preventDefault();
      if (message.trim() === ""||!roomId) {
        alert("Enter valid message");
        return;
      }
      //onSendMessage(message,roomId);
      if(roomId){
          console.log("Sending message", message);
          //const socket = socketInstance.getSocket();
          //console.log("Sending message", socket);
          //sendMessage(message, roomId);
          handleSendMessage(message, roomId);
          setMessage("");
      if(selectedMessage){
          onSendMessage(selectedMessage);
      }
      }
  }
    const handleSendMessage = (message, roomId) => {
        if (message.trim() && roomId) {
            console.log("Sending message");
            console.log(roomId);
           // const socket = socketInstance.getSocket();
            console.log(socket);
            socket.emit('message_sent', { message, room_id: roomId });
        }
        if(selectedMessage){
            onSendMessage(selectedMessage);
        }
    };
  return (
    <form onSubmit={(e)=>sendMessage2(e)} className="send-message">
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
        value={message}
        onChange={(e)=> setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default SendMessage;