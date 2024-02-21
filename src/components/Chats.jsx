import React, {useRef, useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';

const Chats = () => {
    const history = useHistory();
    const { user } = useAuth();
    const [loading, setLoading] = useState(true)

    const handleLogOut = async() =>{
        await auth.signOut();

        history.push('/');
    };

    const getFile = async(url) => {
        const response = await fetch(url);
        const data = await response.blob();

        return new File([data], 'userPhoto.jpg', {type: 'image/jpeg'})
    };

    useEffect(() => {
       if(!user){
         history.push('/');

          return;
        };

        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                'preoject-id': '9021ecc6-fcb7-4c33-9ee6-11022d77366a',
                'user-name' : user.email,
                'user-secret' : user.uid
            }
        }).then(() => {
            setLoading(false);
        }).catch(() => {
            let formdata = new FormData();
            formdata.append('email', user.email);
            formdata.append('username', user.displayName);
            formdata.append('secret', user.uid); 

            getFile(user.photoURL).then((avatar) => {
                formdata.append('avatar', avatar, avatar.name);

                axios.post('https://api.chatengine.io/users/', formdata, {
                    headers: { 'preivate=key' : '6ea71472-24e5-48bd-9fa5-734acf79a930'}
                }).then(() => setLoading(false))
                   .catch((error) => console.log(error))
            })
        })
    }, [user, history]);

    if(!user || loading) return 'Loading...'

  return (
    <div className='chats-page'>
      <div className="nav-bar">
        <div className="logo-tab">
            lets chat
        </div>

        <div 
          className="logout-tab"
          onClick={handleLogOut}
        >
            Logout
        </div>
      </div>

      <ChatEngine
        height='calc(100vh - 66px)'
        projectID="9021ecc6-fcb7-4c33-9ee6-11022d77366a"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  )
}

export default Chats
