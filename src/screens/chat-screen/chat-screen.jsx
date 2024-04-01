import React from 'react';
import './chat-screen.css';
import SearchBar from '../../components/searchbar/searchbar';
import ActiveChat from '../../components/activechat/activechat';
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
            <div className='message-chat'>chat</div>
            <div className='message-queue'>queue</div>
        </div>
    );
}

export default ChatScreen;