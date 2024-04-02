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
const SendMessage = () => {
  const [message, setMessage] = useState("");
  const sendMessage = async (event) => {
    event.preventDefault();
      if (message.trim() === "") {
        alert("Enter valid message");
        return;
      }
      setMessage("");
  }
  return (
    <form onSubmit={(e)=>sendMessage(e)} className="send-message">
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