import React, { useEffect, useRef, useState } from "react";
import Message from "../message/message";
import SendMessage from "../sendmessage/sendmessage";
import "./chatbox.css"
import {getHotelChats, getListChatByRoomId} from "../../api/chat_api";

const ChatBox = ({socket,onSendMessage,selectedMessage}) => {
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
        /*fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(res => res.json())
            .then(messages =>setMessages(messages))*/
        getListChats(selectedMessage);
    },[])

    const getListChats = (selectedMessage) => {
        const params ={

        }
        getListChatByRoomId()
            .then((res) => {
                const chats = res.data;
                console.log(chats);
                setMessages(chats);
            }).catch((e) => {
                console.log(e);
        })
    }
  return (
    <main className="chat-box">
      <div className="messages-wrapper">
        {messages?.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      {/* when a new message enters the chat, the screen scrolls down to the scroll div */}
      <span ref={scroll}></span>
      <SendMessage  onSendMessage={onSendMessage} selectedMessage={selectedMessage} scroll={scroll}></SendMessage>
    </main>
  );
};

export default ChatBox;