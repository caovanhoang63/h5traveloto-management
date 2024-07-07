import React, {useEffect, useState} from 'react';
import './chat-screen.css';
import ActiveChat from '../../components/activechat/activechat';
import MessageQueue from '../../components/messagequeue/messagequeue';
import ChatBox from '../../components/chatbox/chatbox';
import {getHotelChats} from "../../api/chat_api";
import {joinRoom, socket} from "../../socket-io";
const ChatScreen = (props) => {
    const [allMessages, setAllMessages] = useState([]);
    const [messagesQueue, setMessagesQueue] = useState([]);
    const [activeChats, setActiveChats] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);
    const token = sessionStorage.getItem('access-token');


    const getChats =  () => {
            getHotelChats()
                .then(res => {
                    let chats = res.data;
                    setAllMessages(chats);
                    //setMessagesQueue(chats);
                    console.log("chat",chats);
                    console.log("chatQueue",allMessages);
                })
                .catch((e) => {
                    console.log(e);
                })
    }
    const classifyChats = ()=>{
        let arr=[]
        let arr2=[]
        allMessages.forEach(message => {
            if(message.total_message !== message.user_unread+message.hotel_unread){
                arr.push(message)
            }else{
                arr2.push(message)
            }
        })
        setMessagesQueue(arr)
        setActiveChats(arr2)
        console.log("arr",arr)
        console.log("allMessage",allMessages)
        console.log("arr2",arr2)
    }
    const handleSelectMessage = (messageQueue) => {
        console.log('joined', messageQueue.id);
        joinRoom(messageQueue.id);
        sessionStorage.setItem("room-id",messageQueue.id);
        setSelectedMessage(messageQueue);
    };

    useEffect(() => {
        socket.connect();
        getChats();
        function onConnect() {
            console.log("onConnect");
            socket.emit('authenticate', token);
        }

        function onDisconnect() {
            console.log("onDisconnect");
        }
        socket.on('connect', onConnect );
        socket.on('disconnect', onDisconnect);
        socket.on('joined', (data) => {
            console.log('Joined room', data)
        });

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, [token]);
    useEffect(() => {
        classifyChats();
    }, [allMessages]);
    return (
        <div className='chatScreen-container'>
            <div className='active-chat'>
                <div className='label-activechat'>Active Chats</div>
                <ul className='list-message'>
                    {activeChats?.map((activechat) => (
                        <ActiveChat
                            name={activechat.name? activechat.name : 'unknown'}
                            key={activechat.id}
                            text={activechat.last_message.message}
                            date={activechat.last_message.updated_at}
                            onClick={()=>handleSelectMessage(activechat)}
                        />
                    ))
                    }
                </ul>
            </div>
            <div className='message-chat'>
            <ChatBox  selectedMessage={selectedMessage} ></ChatBox>
            </div>
            <div className='message-queue'>
                <ul className='list-messagequeue'>
                    {messagesQueue?.map((messageQueue) => (
                        <MessageQueue
                            key={messageQueue.id}
                            text=""
                            date={messageQueue.updated_at}
                            id={messageQueue.id}
                            onSelectMessage={()=> handleSelectMessage(messageQueue)}
                        />
                    ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default ChatScreen;