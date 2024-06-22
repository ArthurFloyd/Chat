import React from 'react';
import { Provider } from 'react-redux';
import { io } from 'socket.io-client';
// import { Provider as RollbarProvider, ErrorBoundary } from '@rollbar/react';

import App from './components/App.jsx';
import store from './slices/index.js';
import ChatApiProvider from './contexts/ChatApiProvider.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';

const Init = async () => {
  // const rollbarConfig = {
  //   accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
  //   payload: {
  //     environment: 'production',
  //   },
  //   captureUncaught: true,
  //   captureUnhandledRejections: true,
  // };

  const socket = io('/', { autoConnect: false });

  return (
    // <RollbarProvider config={rollbarConfig}>
    // <ErrorBoundary>
    <Provider store={store}>
      <AuthProvider>
        <ChatApiProvider socket={socket}>
          <App />
        </ChatApiProvider>
      </AuthProvider>
    </Provider>
    // </ErrorBoundary>
    // </RollbarProvider>
  );
};

export default Init;
