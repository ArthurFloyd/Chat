import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const getTokenFromStorage = () => {
  let token = '';
  const userStringified = localStorage.getItem('user') || '';
  try {
    const user = JSON.parse(userStringified);
    if (!(user && user.token)) {
      return;
    }

    token = user.token;
  } catch (error) {
    //
  }

  // eslint-disable-next-line consistent-return
  return token;
};

export const channelsApi = createApi({
  reducerPath: 'channels',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/channels',
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${getTokenFromStorage()}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getChannel: builder.query({
      query: () => '',
    }),
  //   getChannelByIp: builder.query({
  //     query: (id) => id,
  //   }),
  //   addChannel: builder.mutation({
  //     query: (name) => ({
  //       method: 'POST',
  //       body: name,
  //     }),
  //   }),
  //   removeChannel: builder.mutation({
  //     query: (id) => ({
  //       url: id,
  //       method: 'DELETE',
  //     }),
  //   }),
  //   editChannel: builder.mutation({
  //     query: (name) => ({
  //       body: name,
  //       method: 'PATCH',
  //     }),
  //   }),
  }),
});

export const {
  useGetChannelQuery,
  // useGetChannelByIpQuery,
  // useAddChannelMutation,
  // useRemoveChannelMutation,
  // useEditChannelMutation,
} = channelsApi;
