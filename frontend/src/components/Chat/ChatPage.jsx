import React, { useEffect } from 'react';
import { requestChannels, requestMessages } from '../../api';

const ChatPage = () => {
  useEffect(() => {
    requestChannels().then((data) => console.log('channels', data));
    requestMessages().then((data) => console.log('messages', data));
  }, []);

  return (
    <div>Тут скоро будет чат</div>
  );
};

export default ChatPage;
