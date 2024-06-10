// import React from 'react';
import axios from 'axios';
// import React, { useState } from 'react';
import { chatApiRoutes } from './routes/routes.js';

// const savedUserData = JSON.parse(localStorage.getItem('user'));
// const [user, setUser] = useState(savedUserData);

const requestUser = async (userData) => {
  const { data } = await axios.post(chatApiRoutes.login(), userData);
  console.log('data', data);
  const { token } = data;
  // console.log('token', token);
  localStorage.setItem('user', token);
  // setUser(token);
  // console.log('user', user);
  return token;
};

const T = () => { };

export { requestUser, T };
