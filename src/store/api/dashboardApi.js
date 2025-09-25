import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/dashboard" }),
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      queryFn: async () => {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 800))

        return {
          data: {
            totalUsers: 1247,
            totalProjects: 89,
            activeProjects: 23,
            completedProjects: 66,
            chartData: [
              { name: "Jan", users: 400, projects: 24 },
              { name: "Feb", users: 300, projects: 13 },
              { name: "Mar", users: 200, projects: 18 },
              { name: "Apr", users: 278, projects: 39 },
              { name: "May", users: 189, projects: 48 },
              { name: "Jun", users: 239, projects: 38 },
            ],
          },
        }
      },
    }),
  }),
})

export const { useGetDashboardStatsQuery } = dashboardApi
