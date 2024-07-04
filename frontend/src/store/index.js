import { configureStore } from '@reduxjs/toolkit';

// import loadingStatusReducer from './loadingStatusSlice.js';
// import channelsReducer from './channelsSlice.js';
// import messagesReducer from './messagesSlice.js';
// import modalReducer from './modalSlice.js';
import { channelsApi } from '../api/channelsApi.js';

export default configureStore({
  reducer: {
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(channelsApi.middleware),
});

// channels: channelsReducer,
// messages: messagesReducer,
// modal: modalReducer,
// loadingStatus: loadingStatusReducer,
