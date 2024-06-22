import React from 'react';
// import { useTranslation } from 'react-i18next';

import ChannelName from '../../common/ChannelName.jsx';

const MessagesHeader = ({ channelName, messagesCount }) =>
// const { t } = useTranslation();

(
  <div className="border-bottom bg-light shadow-sm small p-3">
    <p className="m-0">
      <b><ChannelName name={channelName} /></b>
    </p>
    <p className="text-muted m-0">
      {'messages', { count: messagesCount }}
    </p>
  </div>
);
export default MessagesHeader;
