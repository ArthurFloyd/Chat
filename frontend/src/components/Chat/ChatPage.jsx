import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { requestChannels } from '../../api';
import { addChannels } from '../../slices/channelsSlice';

const ChatPage = () => {
  const channels = useSelector((state) => state.channels);
  console.log(channels);
  const dispatch = useDispatch();

  useEffect(() => {
    requestChannels().then((data) => dispatch(addChannels(data)));
    // requestMessages().then((data) => console.log('messages', data));
  }, [dispatch]);

  return (
    <div>Тут скоро будет чат</div>
  );
};

export default ChatPage;
