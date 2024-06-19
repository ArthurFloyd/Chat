import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {

  },
});

export default channelsSlice.reducer;
