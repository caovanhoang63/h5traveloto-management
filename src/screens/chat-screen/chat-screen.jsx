import React from 'react';
import './chat-screen.css';
import SearchBar from '../../components/searchbar/searchbar';
import ActiveChat from '../../components/activechat/activechat';
import MessageQueue from '../../components/messagequeue/messagequeue';
import ChatBox from '../../components/chatbox/chatbox';
import SendMessage from '../../components/sendmessage/sendmessage';
const ChatScreen = (props) => {
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
            <ChatBox></ChatBox>
            {/* <SendMessage></SendMessage> */}
            </div>
            <div className='message-queue'>
                <ul className='list-messagequeue'>
                    <MessageQueue></MessageQueue>
                    <MessageQueue></MessageQueue>
                    <MessageQueue></MessageQueue>
                </ul>
            </div>
        </div>
    );
}

export default ChatScreen;