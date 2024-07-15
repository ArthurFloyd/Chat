import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import useSetHeaders from '../hooks/useSetHeaders';
import { chatApiRoutes } from '../containers/Routes/routesPath';

export const authenticateApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({
    baseUrl: chatApiRoutes.baseUrl(),
    prepareHeaders: useSetHeaders,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: 'login',
        method: 'POST',
        body: user,
      }),
    }),
    signUp: builder.mutation({
      query: (newUserData) => ({
        url: 'signup',
        method: 'POST',
        body: newUserData,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignUpMutation } = authenticateApi;
