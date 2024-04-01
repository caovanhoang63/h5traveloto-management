import React from 'react';
import './activechat.css'
const ActiveChat = ({name = "Account",text="Last message",time="12:00 am"}) => {
    return (
        <div className="message-container">
            <div className='message-wrapper'>
                <div className="avatar"></div>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="text">{text}</div>
                    <div className="time">{time}</div>
                </div>
            </div>
        </div>
    );
}

export default ActiveChat;