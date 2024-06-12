// import React from 'react';
import axios from 'axios';
// import React, { useState } from 'react';
import { chatApiRoutes } from './routes/routes.js';

// const savedUserData = JSON.parse(localStorage.getItem('user'));
// const [user, setUser] = useState(savedUserData);

export const requestUser = async (userData) => {
  const { data } = await axios.post(chatApiRoutes.login(), userData);
  // console.log('data', data);
  const { token } = data;
  // console.log('token', token);
  localStorage.setItem('token', token);
  // setUser(token);
  // console.log('user', user);
  return token;
};

export const requestChannels = async () => {
  const token = localStorage.getItem('token'); // TODO: change to 'token'
  const { data } = await axios.get(chatApiRoutes.channels(), {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};
