import React from 'react';
import './messagequeue.css'
import Button, { PrimaryButton } from '../button/button';
import {format} from 'date-fns';
const MessageQueue = ({name="Account",text,date="0/0/0",ws,id,onSelectMessage}) =>{
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'dd/MM/yyyy');
    };
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return format(date, 'HH:mm');
    };
    const formattedDate = formatDate(date);
    const formattedTime = formatTime(date);
    return (
        <div className='messagequeue-container'>
            <div className='messagequeue-header'>
                <span>
                {`Engaged with ${name}`}
                </span>
                <PrimaryButton onClick={()=>onSelectMessage()} size='sm' className={"messagequeue-button"}>Engaged</PrimaryButton>
            </div>
            <div className='messagequeue-body'>
            {text||`Thank you. Please feel free to reach out if you require any further assistance. Have a great day`}
            </div>
            <div className='messagequeue-footer'>
                <span className='messagequeue-date'> {formattedDate}</span>
                <span className='messagequeue-time'>{formattedTime}</span>

            </div>

        </div>
    );
}

export default MessageQueue;