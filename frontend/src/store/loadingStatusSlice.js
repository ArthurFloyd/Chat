// /* eslint no-param-reassign: ["error", { "props": true,
// "ignorePropertyModificationsFor": ["state"] }] */

// import { createSlice } from '@reduxjs/toolkit';
// // import { fetchInitialChannels } from './thunks.js';

// const statusesMap = {
//   notLoaded: 'notLoaded',
//   loading: 'loading',
//   successful: 'successful',
//   authError: 'authError',
//   failed: 'failed',
// };

// const initialState = {
//   serverData: statusesMap.notLoaded,
// };

// const loadingStatusSlice = createSlice({
//   name: 'loadingStatus',
//   initialState,
//   reducers: {
//     unload: () => initialState,
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchInitialChannels.pending, () => statusesMap.loading)
//       .addCase(fetchInitialChannels.fulfilled, () => statusesMap.successful)
//       .addCase(fetchInitialChannels.rejected, (_state, action) => {
//         if (action.payload === 401) {
//           return statusesMap.authError;
//         }
//         return statusesMap.failed;
//       });
//   },
// });

// const { actions } = loadingStatusSlice;

// const selectors = {
//   getStatus: (state) => state.loadingStatus,
// };

// export { actions, selectors };
// export default loadingStatusSlice.reducer;
