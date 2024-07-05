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
import useWebSocket, {ReadyState} from "react-use-websocket";
const ChatScreen = (props) => {
    const [message, setMessage] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [ws, setWs] = useState(null);
    const [messagesQueue, setMessagesQueue] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const token = sessionStorage.getItem('access-token');
    const { sendMessage, lastMessage, readyState } = useWebSocket('wss://api.h5traveloto.site', {
        onOpen: () => {
            console.log('WebSocket connection established');
            sendMessage(JSON.stringify({
                type: 'authenticate',
                token: token,
            }));
        },
        onMessage: (event) => {
            const data = JSON.parse(event.data);
            switch (data.type) {
                case 'joined':
                    console.log('Joined room', data);
                    break;
                case 'new_message':
                    console.log('New message', data);
                    //setMessages((prevMessages) => [...prevMessages, data.message]);
                    break;
                default:
                    break;
            }
        },
        onClose: (event) => {
            if (event.wasClean) {
                console.log('WebSocket connection closed cleanly');
            } else {
                console.error('WebSocket connection closed unexpectedly');
            }
            console.log(`Code: ${event.code}, Reason: ${event.reason}`);
        },
        onError: (error) => {
            console.error('WebSocket error', error);
        },
    });

    useEffect(() => {
        console.log('token',token)
        getChats();
        /*try {

           // const socket = io("https://api.h5traveloto.site", { transports: ['websocket'] })
            //tao ket noi websocket
            const socket = new WebSocket('wss://api.h5traveloto.site/socket-io');
            // Lưu WebSocket instance vào state
            setWs(socket);
            //su kien khi ket noi mo

            socket.onopen = () => {
                console.log('WebSocket Open');
                socket.send(JSON.stringify({
                    type: 'authenticate',
                    token: token,
                }));
            };

            // Sự kiện khi nhận được tin nhắn
            socket.onmessage = (event) => {
                setMessage(event.data);
            };


            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                switch (data.type) {
                    case 'joined':
                        console.log('Joined room', data);
                        break;
                    case 'new_message':
                        console.log('New message', data);
                       //setMessages((prevMessages) => [...prevMessages, data.message]);
                        break;
                    default:
                        break;
                }
            };
            // Sự kiện khi kết nối đóng
            socket.onclose = () => {
                console.log('WebSocket connection closed');
            };
            // Dọn dẹp khi component bị unmount
            return () => {
                socket.close();
            };
        }catch(err) {
            console.log(err);
        }*/
    }, []);
    const getChats = () => {
        getHotelChats()
            .then(res => {
                const chats = res.data;
                console.log(chats);
                setMessagesQueue(chats);
            })
            .catch((e) => {
                console.log(e);
            })
    }
    const handleSendMessage = (message, roomId) => {
        if (readyState === ReadyState.OPEN) {
            sendMessage(JSON.stringify({
                type: 'message_sent',
                message: message,
                room_id: roomId,
            }));
        }
    };
    const handleSelectMessage = (messageQueue) => {
        if (readyState === ReadyState.OPEN) {
            sendMessage(JSON.stringify({
                type: 'user_joined',
                room_id: messageQueue.id,
            }));
        }
        setSelectedMessage(messageQueue);
    };
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
            <ChatBox  onSendMessage={handleSendMessage} selectedMessage={selectedMessage} ></ChatBox>
            {/* <SendMessage></SendMessage> */}
            </div>
            <div className='message-queue'>
                <ul className='list-messagequeue'>
                    {messagesQueue?.map((messageQueue) => (
                        <MessageQueue
                            key={messageQueue.id}
                            text={messageQueue.last_message}
                            date={messageQueue.created_at}
                            id={messageQueue.id}
                            onSelectMessage={()=> handleSelectMessage(messageQueue)}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ChatScreen;