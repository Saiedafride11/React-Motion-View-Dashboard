import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import RoleGuard from "./components/RoleGuard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Users from "./pages/Users";
import { store } from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/dashboard"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Dashboard />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/users"
                element={
                  <ProtectedRoute>
                    <RoleGuard
                      allowedRoles={["admin"]}
                      fallback={<Navigate to="/dashboard" replace />}
                    >
                      <Layout>
                        <Users />
                      </Layout>
                    </RoleGuard>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Layout>
                      <Profile />
                    </Layout>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/projects"
                element={<Layout>This Page is Coming...</Layout>}
              />
              <Route
                path="/settings"
                element={<Layout>This Page is Coming...</Layout>}
              />
            </Routes>
          </div>
        </Router>
      </Provider>
      <Toaster position="top-center" />
    </>
  );
}

export default App;
