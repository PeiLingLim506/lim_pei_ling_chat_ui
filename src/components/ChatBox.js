import React, { useState } from 'react';
import { colors } from '../assets/variables/colors';
import '../css/ChatBox.css';

const ChatBox = (props) => {
    return (
        <div className='d-flex mb-4' style={props.userid === 0 ? { justifyContent: 'flex-end' } : { justifyContent: 'flex-start' }}>
            <div className='chat-box d-flex'>
                <div style={props.userid === 0 ? { order: 2 } : { order: 1 }}>
                    <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' className="user-img" alt="" />
                </div>

                <div className='chat-list flex-grow-1 mx-3' style={props.userid === 0 ? { order: 1 } : { order: 2 }}>
                    <p className='mb-2'>{props.sender}<span className='ms-3' style={{ color: colors.input }}>{props.datetime}</span></p>
                    <div className='p-3' 
                        style={props.userid === 0 ? {
                            backgroundColor: colors.primary, 
                            color: colors.white,
                            borderRadius: '10px', 
                            borderTopRightRadius: 0,
                        } 
                        : { 
                            border: '1px solid', 
                            borderColor: colors.secondary, 
                            borderRadius: '10px',
                            borderTopLeftRadius: 0,
                        }}
                    >
                        {props.msg}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatBox;