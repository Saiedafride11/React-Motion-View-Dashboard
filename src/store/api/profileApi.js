import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const profileApi = createApi({
  reducerPath: "profileApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/profile" }),
  tagTypes: ["Profile"],
  endpoints: (builder) => ({
    updateProfile: builder.mutation({
      queryFn: async (profileData) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Simulate successful profile update
        const updatedProfile = {
          ...profileData,
          updatedAt: new Date().toISOString(),
        }

        return { data: updatedProfile }
      },
      invalidatesTags: ["Profile"],
    }),
    changePassword: builder.mutation({
      queryFn: async ({ currentPassword, newPassword }) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Simulate password validation
        if (currentPassword !== "admin123" && currentPassword !== "user123") {
          return { error: { status: 400, data: { message: "Current password is incorrect" } } }
        }

        return { data: { message: "Password updated successfully" } }
      },
    }),
  }),
})

export const { useUpdateProfileMutation, useChangePasswordMutation } = profileApi
