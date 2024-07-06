/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["state"] }] */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import { actions as loadingStatusActions } from './loadingStatusSlice.js';
// import { fetchInitialChannels } from './thunks.js';

const channelsAdapter = createEntityAdapter();

const initialState = channelsAdapter.getInitialState({
  currentChannelId: null,
});

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentChannel: (state, { payload }) => {
      state.currentChannelId = payload;
    },
    addChannels: channelsAdapter.addMany,
    addChannel: channelsAdapter.addOne,
    removeChannel: (state, { payload }) => {
      if (state.currentChannelId === payload) {
        const newCurrentChannelId = state.ids[0];
        state.currentChannelId = newCurrentChannelId;
      }
      channelsAdapter.removeOne(state, payload);
    },
    renameChannel: channelsAdapter.updateOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInitialChannels.fulfilled, (state, { payload }) => {
        if (!(payload.length && !payload[0].channelId)) {
          return;
        }
        // console.log('CHANNELS WRITE', payload);
        channelsAdapter.setAll(state, payload);
        state.currentChannelId = payload[0].id;
      })
      .addCase(loadingStatusActions.unload, () => initialState);
  },
});

const { actions } = channelsSlice;

const selectors = channelsAdapter.getSelectors((state) => state.channels);
const customSelectors = {
  selectAllChannels: selectors.selectAll,
  selectAllChannelsNames: (state) => selectors.selectAll(state).map(({ name }) => name),
  selectCurrentChannel: (state) => {
    const { currentChannelId } = state.channels;
    return selectors.selectById(state, currentChannelId);
  },
};

export { actions, customSelectors as selectors };
export default channelsSlice.reducer;
