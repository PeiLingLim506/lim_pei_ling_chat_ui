import React, { useState } from 'react';

const ChatInput = ({ message, setMessage }) => {

    const handleChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className='d-flex align-items-center rounded-1 py-2'>
            <input
                type="text"
                placeholder="Type a message here.."
                value={message}
                onChange={handleChange}
            />
        </div>
    );
};

export default ChatInput;