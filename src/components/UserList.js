import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/UserList.css';
import { colors } from '../assets/variables/colors';

const UserList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div className='user-list'>
          {data.map(user => (
            <div className='d-flex mb-3'>
                <div className='pe-2'>
                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' className="user-img" alt="" />
                </div>
                <div>
                    <p className='user-name'>{user.name}</p>
                    <p className='user-msg' style={{ color: colors.input }}>{user.email}</p>
                    <div className='d-flex'>
                        <p className='user-datetime me-4'>{user.username}</p>
                        <p className='user-datetime'>{user.id}</p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserList;