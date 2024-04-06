import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ChatBox } from './index.js';

const ChatList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/chathistory.json');
        
        if (response.data.length > 0) {
            const chatlist = response.data[0].chatlist;
            const sortedMessages = chatlist.sort((a, b) => {
                return new Date(a.timestamp) - new Date(b.timestamp);
            });
            setData(sortedMessages);
        } else {
            setData([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {data ? (
        <>
            {data.map(chat => (
                <ChatBox msg={chat.message} userid={chat.userid} sender={chat.sender} datetime={chat.timestamp} />
            ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ChatList;