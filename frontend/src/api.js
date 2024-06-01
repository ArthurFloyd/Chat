// import React from 'react';
import axios from 'axios';
import { chatApiRoutes } from './routes/routes.js';

const requestUser = async (inputData) => {
  const { data } = await axios.post(chatApiRoutes.login(), inputData);
  // console.log('data', data);
  const { token } = data;
  // console.log('token', token);
  localStorage.setItem('user', token);
  // console.log('ls', localStorage);
};

const T = () => { };

export { requestUser, T };
