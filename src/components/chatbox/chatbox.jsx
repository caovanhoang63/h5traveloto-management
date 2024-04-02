import React, { useEffect, useRef, useState } from "react";
import Message from "../message/message";
import SendMessage from "../sendmessage/sendmessage";
import "./chatbox.css"
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

//   useEffect(() => {
//     const q = query(
//       collection(db, "messages"),
//       orderBy("createdAt", "desc"),
//       limit(50)
//     );

//     const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
//       const fetchedMessages = [];
//       QuerySnapshot.forEach((doc) => {
//         fetchedMessages.push({ ...doc.data(), id: doc.id });
//       });
//       const sortedMessages = fetchedMessages.sort(
//         (a, b) => a.createdAt - b.createdAt
//       );
//       setMessages(sortedMessages);
//     });
//     return () => unsubscribe;
//   }, []);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(res => res.json())
            .then(messages =>setMessages(messages))
    },[])
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage scroll={scroll}></SendMessage>
    </main>
  );
};

export default ChatBox;