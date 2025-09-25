import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// Mock API base
const mockUsers = [
  { id: 1, email: "admin@example.com", password: "admin123", role: "admin", name: "Admin User" },
  { id: 2, email: "user@example.com", password: "user123", role: "user", name: "Regular User" },
]

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/auth",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      queryFn: async ({ email, password }) => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000))

        const user = mockUsers.find((u) => u.email === email && u.password === password)
        if (user) {
          const { password: _, ...userWithoutPassword } = user
          return {
            data: {
              user: userWithoutPassword,
              token: `mock-token-${user.id}-${Date.now()}`,
            },
          }
        }
        return { error: { status: 401, data: { message: "Invalid credentials" } } }
      },
    }),
  }),
})

export const { useLoginMutation } = authApi
