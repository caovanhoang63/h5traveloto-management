import React, { useEffect, useRef, useState } from "react";
import Message from "../message/message";
import SendMessage from "../sendmessage/sendmessage";
import "./chatbox.css"
import {getHotelChats, getListChatByRoomId} from "../../api/chat_api";
import {socket} from "../../socket-io";
import io from "socket.io-client";

const ChatBox = ({ws,onSendMessage,selectedMessage}) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef(null);
    useEffect(() => {
        scroll.current?.scrollIntoView({behavior: "smooth"});
    }, [messages]);
    useEffect(()=>{
        if(selectedMessage){
            getListChats(selectedMessage);
        }
    },[selectedMessage])

    useEffect(() => {
        const onMessageReceived = (message) => {
            console.log('received message')
            setMessages((prevMessages) => [...prevMessages, message]);
            //getListChats(selectedMessage);
           // scroll.current?.scrollIntoView({behavior: "smooth"});
        };

        //const socket = socketInstance.getSocket();

        const token = sessionStorage.getItem('access-token');
        //socketInstance.initialize(token, onMessageReceived);

        /* socketInstance.initialize(
            sessionStorage.getItem('access-token'),
            onMessageReceived
        );*/
        if(socket){
            socket.on('new_message', onMessageReceived);
            socket.on('cannot_send_message', ()=>{
                console.log("cannot send message");
            });
        }
        return () => {
            if (socket) {
                socket.off('new_message', onMessageReceived);
            }
        };
    }, []);
    /*useEffect(() => {
        socket.on('new_message', (data) => {
            console.log("New message", data);
            setMessages(prevMessages => [...prevMessages, data]);
        });
        return () => {
            if (socket) {
                socket.off('new_message');
            }
        };
    }, [socket]);*/
    const getListChats = (selectedMessage) => {
        const params ={
        }
        getListChatByRoomId()
            .then((res) => {
                const chats = res.data;
                console.log(chats);
                setMessages(chats.reverse());
            }).catch((e) => {
                console.log(e);
        })
    }

    return (
    <main className="chat-box">
        <div className="messages-wrapper">
            {messages?.map((message) => (
                <Message key={message.id} message={message}/>
            ))}
            <span ref={scroll}></span>
        </div>
        {/* when a new message enters the chat, the screen scrolls down to the scroll div */}

      <SendMessage  onSendMessage={getListChats} selectedMessage={selectedMessage} scroll={scroll}></SendMessage>
    </main>
  );
};

export default ChatBox;