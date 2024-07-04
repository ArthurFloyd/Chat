import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useSetHeaders from '../hooksRequest/useSetHeaders';

export const channelsApi = createApi({
  reducerPath: 'channels',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/v1/channels',
    prepareHeaders: useSetHeaders,
    tagTypes: ['Channels'],
  }),
  endpoints: (builder) => ({
    getChannels: builder.query({
      query: () => '',
      providesTags: ['Channels'],
    }),
    addChannel: builder.mutation({
      query: (channelName) => ({
        method: 'POST',
        body: channelName,
        invalidatesTags: ['Channels'],
      }),
    }),
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
  useAddChannelMutation,
  // useRemoveChannelMutation,
  // useEditChannelMutation,
} = channelsApi;
