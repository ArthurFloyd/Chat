import React from 'react';
import { io } from 'socket.io-client';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './slices/index.js';

const Init = () => {
  const socket = io('/');
  console.log(socket);
  socket.connect();
  socket.on('connect', () => {
    console.log(socket.connected);
    if (!socket.connect) {
      console.error('socket con error');

      return;
    }

    socket.on('newMessage', (payload) => {
      console.log(payload); // => { body: "new message", channelId: 7, id: 8, username: "admin" }
    });
  });

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Init;
