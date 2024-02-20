import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats = () => {
  return (
    <div className='chats-page'>
      <div className="nav-bar">
        <div className="logo-tab">
            lets chat
        </div>

        <div className="logout-tab">
            Logout
        </div>
      </div>

      <ChatEngine alc
        height="calc(100vh - 66px"
        projectId="9021ecc6-fcb7-4c33-9ee6-11022d77366a"
      />
    </div>
  )
}

export default Chats
