import React, { useState } from 'react';
import { ChatInput, CustomButton } from './index.js';
import { faHome, faBuilding, faHourglass, faEnvelope, faFileInvoice, faCalendar, faComment, faGear, faUserTie, faPhone, faVideo, faEllipsisVertical, faAt, faFont, faPaperclip, faFaceSmile, faImage, faLink, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../assets/variables/colors';
import axios from 'axios';

const ChatInputBar = () => {
    const [message, setMessage] = useState('');
    const smButtons = [faAt, faFont, faPaperclip, faFaceSmile, faImage, faLink];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingData = await axios.get('/data/chathistory.json');
        const jsonData = existingData.data;
        const newMessage = {
            id: jsonData[0].chatlist.length + 1,
            userid: 0,
            sender: 'Me',
            message: message,
            timestamp: new Date().toISOString()
        };

        try {
            await axios.post('http://localhost:3002/api/chatSystem/chat/add', newMessage);

            // Clear the input field after saving the message
            setMessage('');
        } catch (error) {
            console.error('Error saving message:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='d-flex align-items-center justify-content-between border-top px-3 py-1 w-p100 position-absolute bottom-0' style={{ backgroundColor: colors.white, borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                <ChatInput message={message} setMessage={setMessage} />
                <div className='d-flex align-items-center'>
                    {smButtons.map((smButton, index) => (
                        <div key={index} className='ms-1'>
                            <CustomButton icon={smButton} color={colors.black} bordercolor={colors.input} w='10px'/>
                        </div>
                    ))}
                    <div className='ms-4'>
                        <CustomButton icon={faPaperPlane} bgcolor={colors.info} color={colors.white} border='none' isRoundBtn={true} w='40px' h='40px' type='submit' />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default ChatInputBar;