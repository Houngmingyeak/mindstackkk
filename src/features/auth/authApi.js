import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from '../../utils/apiClient';
import { setCredentials } from './authSlice';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {}
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData,
      }),
    }),
    googleLogin: builder.mutation({
      query: ({ token }) => ({
        url: '/auth/google',  // ត្រូវប្រាកដថា endpoint នេះមាននៅក្នុង API
        method: 'POST',
        body: { token },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {}
      },
    }),
    githubLogin: builder.mutation({
      query: ({ token }) => ({
        url: '/auth/github',  // ត្រូវប្រាកដថា endpoint នេះមាន
        method: 'POST',
        body: { token },
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data));
        } catch (err) {}
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGoogleLoginMutation,
  useGithubLoginMutation,
} = authApi;