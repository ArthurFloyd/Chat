import React, { useEffect } from 'react';
import { requestChannels } from '../../api';

const chatPage = () => {
  useEffect(() => {
    const data = requestChannels();
    console.log(data);
  }, []);

  return (
    <div>Тут скоро будет чат</div>
  );
};

export default chatPage;
