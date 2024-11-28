import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UserInformation } from '@/schemas'

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getUsers: builder.query<UserInformation[], void>({
      query: () => '/user-informations',
      providesTags: ['Users'],
    }),
    addUser: builder.mutation<UserInformation, Partial<UserInformation>>({
      query: (body) => ({
        url: '/user-informations',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
})

export const { useGetUsersQuery, useAddUserMutation } = apiSlice
