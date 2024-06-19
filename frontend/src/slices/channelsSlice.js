import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  channels: [],
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    addChannels: (state, action) => {
      state.channels.push(...action.payload);
    },

  },
});

// console.log(channelsSlice.getInitialState());

export const { addChannels } = channelsSlice.actions;
export default channelsSlice.reducer;
