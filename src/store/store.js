import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "./api/authApi"
import { dashboardApi } from "./api/dashboardApi"
import { profileApi } from "./api/profileApi"
import { usersApi } from "./api/usersApi"
import authReducer from "./slices/authSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [dashboardApi.reducerPath]: dashboardApi.reducer,
    [profileApi.reducerPath]: profileApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      usersApi.middleware,
      dashboardApi.middleware,
      profileApi.middleware,
    ),
})
