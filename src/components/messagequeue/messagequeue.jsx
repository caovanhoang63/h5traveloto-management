import React from 'react';
import './messagequeue.css'
import Button, { PrimaryButton } from '../button/button';
const MessageQueue = ({name="Account",text}) =>{
    return (
        <div className='messagequeue-container'>
            <div className='messagequeue-header'>
                <span>
                {`Engaged with ${name}`}
                </span>
                <PrimaryButton size='sm' className={"messagequeue-button"}>Engaged</PrimaryButton>            
            </div>
            <div className='messagequeue-body'>
            {text||`Thank you. Please feel free to reach out if you require any further assistance. Have a great day`}
            </div>
            <div className='messagequeue-footer'>
                <span className='messagequeue-date'>2/4/2024</span>
                <span className='messagequeue-time'>12:00 am</span>

            </div>

        </div>
    );
}

export default MessageQueue;