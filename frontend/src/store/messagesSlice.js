/* eslint no-param-reassign: ["error", { "props": true,
"ignorePropertyModificationsFor": ["state"] }] */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';

// import { fetchInitialMessages } from './thunks.js';
import { actions as channelsActions } from './channelsSlice.js';
import { actions as loadingStatusActions } from './loadingStatusSlice.js';

const messagesAdapter = createEntityAdapter();

const initialState = messagesAdapter.getInitialState();

const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessages: messagesAdapter.addMany,
    addMessage: messagesAdapter.addOne,
  },
  extraReducers: (builder) => {
    builder
      .addCase(channelsActions.removeChannel, (state, { payload }) => {
        const restMessages = Object.values(state.entities).filter((e) => e.channelId !== payload);
        // console.log('pay', payload);
        messagesAdapter.setAll(state, restMessages);
      })
      .addCase(fetchInitialMessages.fulfilled, (state, { payload }) => {
        if (!(payload.length && payload[0].channelId)) {
          return;
        }

        console.log('MSGS WRITE', payload);
        messagesAdapter.setAll(state, payload);
      })
      .addCase(loadingStatusActions.unload, () => initialState);
  },
});

const { actions } = messagesSlice;

const selectors = messagesAdapter.getSelectors((state) => state.messages);
const customSelectors = {
  selectAllMesagges: selectors.selectAll,
  selectCurrentChannelMessages: (state) => {
    // console.log('!', state);

    const { currentChannelId } = state.channels;

    return selectors.selectAll(state).filter(({ channelId }) => +channelId === +currentChannelId);
  },
};

export { actions, customSelectors as selectors };
export default messagesSlice.reducer;
