import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api', 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://' }), 
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => 'users', 
    }),
    createUser: builder.mutation({
      query: (userData) => ({
        url: 'users',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});


export const { useGetUsersQuery, useCreateUserMutation } = apiSlice;
