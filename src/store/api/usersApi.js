import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { mockUsersList } from "../../../fake_data"

// 🔹 Helper: Load users from localStorage
const loadUsers = () => {
  const stored = localStorage.getItem("users")
  return stored ? JSON.parse(stored) : mockUsersList
}

// 🔹 Helper: Save users to localStorage
const saveUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users))
}

// Initialize mockUsers from storage
let mockUsers = loadUsers()

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/users" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query({
      queryFn: async ({ search = "", sortBy = "name", sortOrder = "asc", filter = "all" } = {}) => {
        await new Promise((resolve) => setTimeout(resolve, 500))

        let filteredUsers = [...mockUsers]

        // Search filter
        if (search) {
          filteredUsers = filteredUsers.filter(
            (user) =>
              user.name.toLowerCase().includes(search.toLowerCase()) ||
              user.email.toLowerCase().includes(search.toLowerCase()),
          )
        }

        // Status filter
        if (filter !== "all") {
          filteredUsers = filteredUsers.filter((user) => user.status === filter)
        }

        // Sorting
        filteredUsers.sort((a, b) => {
          const aVal = a[sortBy]
          const bVal = b[sortBy]
          if (sortOrder === "asc") return aVal > bVal ? 1 : -1
          return aVal < bVal ? 1 : -1
        })

        return { data: filteredUsers }
      },
      providesTags: ["User"],
    }),

    createUser: builder.mutation({
      queryFn: async (newUser) => {
        await new Promise((resolve) => setTimeout(resolve, 800))
        const user = {
          ...newUser,
          id: mockUsers.length ? Math.max(...mockUsers.map((u) => u.id)) + 1 : 1,
          createdAt: new Date().toISOString().split("T")[0],
        }
        mockUsers.push(user)
        saveUsers(mockUsers) 
        return { data: user }
      },
      invalidatesTags: ["User"],
    }),

    updateUser: builder.mutation({
      queryFn: async ({ id, ...updates }) => {
        await new Promise((resolve) => setTimeout(resolve, 800))
        const index = mockUsers.findIndex((u) => u.id === id)
        if (index !== -1) {
          mockUsers[index] = { ...mockUsers[index], ...updates }
          saveUsers(mockUsers)
          return { data: mockUsers[index] }
        }
        return { error: { status: 404, data: { message: "User not found" } } }
      },
      invalidatesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      queryFn: async (id) => {
        await new Promise((resolve) => setTimeout(resolve, 500))
        const index = mockUsers.findIndex((u) => u.id === id)
        if (index !== -1) {
          mockUsers.splice(index, 1)
          saveUsers(mockUsers)
          return { data: { id } }
        }
        return { error: { status: 404, data: { message: "User not found" } } }
      },
      invalidatesTags: ["User"],
    }),
  }),
})

export const { useGetUsersQuery, useCreateUserMutation, useUpdateUserMutation, useDeleteUserMutation } = usersApi

