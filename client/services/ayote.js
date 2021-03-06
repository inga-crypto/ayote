import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AYOTE_API_BASE_URL } from '@env';

// Define a service using a base URL and expected endpoints
export const ayoteApi = createApi({
  reducerPath: 'ayoteApi',
  baseQuery: fetchBaseQuery({
    baseUrl: AYOTE_API_BASE_URL
  }),
  tagTypes: ['Meal', 'Profile'],
  endpoints: (builder) => ({
    getAllMeals: builder.query({
      query: () => `/meals`,
      providesTags: ['Meal']
    }),
    addMeal: builder.mutation({
      query: (body) => ({
        url: `/meals`,
        method: 'POST',
        body
      }),
      invalidatesTags: ['Meal']
    }),
    deleteMeal: builder.mutation({
      query: (id) => ({
        url: `/meals/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Meal']
    }),
    getUserProfile: builder.query({
      query: (id) => `/profiles/${id}`,
      providesTags: ['Profile']
    }),
    updateProfile: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/profiles/${id}`,
        method: 'PATCH',
        body: patch
      }),
      invalidatesTags: ['Profile']
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllMealsQuery, useAddMealMutation, useDeleteMealMutation, useGetUserProfileQuery, useUpdateProfileMutation } = ayoteApi;
