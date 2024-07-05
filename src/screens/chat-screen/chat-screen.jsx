import React, {useEffect, useState} from 'react';
import './chat-screen.css';
import SearchBar from '../../components/searchbar/searchbar';
import ActiveChat from '../../components/activechat/activechat';
import MessageQueue from '../../components/messagequeue/messagequeue';
import ChatBox from '../../components/chatbox/chatbox';
import SendMessage from '../../components/sendmessage/sendmessage';
import Button from "../../components/button/button";
import {getHotelChats} from "../../api/chat_api";
import Message from "../../components/message/message";
const ChatScreen = (props) => {
    const [message, setMessage] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [ws, setWs] = useState(null);
    const [messagesQueue, setMessagesQueue] = useState([]);
    const token = localStorage.getItem('access-token');
    useEffect(() => {
        console.log('token',token)
        getChats();
        try {

            //tao ket noi websocket
            const socket = new WebSocket('wss://api.h5traveloto.site');

            //su kien khi ket noi mo
            socket.onopen = () => {
                console.log('WebSocket Open');
            }
            //ws.emit('authenticate', token);
            // Sự kiện khi nhận được tin nhắn
            socket.onmessage = (event) => {
                setMessage(event.data);
            };

            // Sự kiện khi kết nối đóng
            socket.onclose = () => {
                console.log('WebSocket connection closed');
            };
            // Lưu WebSocket instance vào state
            setWs(socket);

            // Dọn dẹp khi component bị unmount
            return () => {
                socket.close();
            };
        }catch(err) {
            console.log(err);
        }
    }, []);
    const getChats = () => {
        getHotelChats()
            .then(res => {
                const chats = res.data;
                console.log(chats);
                const length = chats.length;
                const allChats =[];
                for (let i = 0; i < length; i++) {
                    allChats.push(chats[i]);
                }
                setMessagesQueue(allChats);
            })
    }
    return (
        <div className='chatScreen-container'>
            <div className='active-chat'>
                <div className='label-activechat'>Active Chats</div>
                <ul className='list-message'>
                    <ActiveChat ></ActiveChat>
                    <ActiveChat ></ActiveChat>
                    <ActiveChat ></ActiveChat>

                </ul>
            </div>
            <div className='message-chat'>
            <ChatBox socket={ws} ></ChatBox>
            {/* <SendMessage></SendMessage> */}
            </div>
            <div className='message-queue'>
                <ul className='list-messagequeue'>
                    {messagesQueue?.map((messageQueue) => (
                        <MessageQueue key={messageQueue.id}
                                      text={messageQueue.last_message}
                                      date={messageQueue.created_at}
                                      ws={ws}
                                      id={messageQueue.id}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ChatScreen;