import React from 'react';
import './activechat.css'
import {format} from "date-fns";
import icon_avatar from '../../assets/icons/icon_avatar.png'
const ActiveChat = ({name,text="Last message",date,onClick}) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM');
    };
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'HH:mm');
    };
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);
    return (
        <div className="message-container"
            onClick={()=>onClick()}>
            <div className='message-wrapper'>
                <img src={icon_avatar  } className="avatar"></img>
                <div className="content">
                    <div className="name">{name}</div>
                    <div className="text">{text}</div>
                    <div className="time">{formattedTime+" "+formattedDate}</div>
                </div>
            </div>
        </div>
    );
}

export default ActiveChat;