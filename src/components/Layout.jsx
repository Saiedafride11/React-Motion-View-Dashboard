import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { sidebarNavigation } from "../../fake_data";
import logoImage from "../assets/motion-logo.png";
import { logout } from "../store/slices/authSlice";
import RoleGuard from "./RoleGuard";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 border-r border-gray-700">
          <div className="flex flex-col h-screen">
            <div className="p-6 pe-0">
              <img src={logoImage} alt="logo" className="w-20" />
              <h1 className="text-xl font-semibold text-white mt-2">
                Motion View Dashboard
              </h1>
              <p className="text-xs text-gray-400 mt-1 capitalize">
                {user?.role} Panel
              </p>
            </div>

            <nav className="flex-1 px-4 space-y-2">
              {sidebarNavigation?.map((item) => (
                <RoleGuard key={item.name} allowedRoles={item.roles}>
                  <button
                    onClick={() => navigate(item.href)}
                    className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                      location.pathname === item.href
                        ? "bg-blue-600 text-white"
                        : "text-gray-300 hover:text-white hover:bg-gray-700"
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </button>
                </RoleGuard>
              ))}
            </nav>

            <div className="p-4 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-blue-600">
                    <span className="text-sm font-medium text-white">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {user?.name}
                    </p>
                    <p
                      className={`text-xs capitalize ${
                        user?.role === "admin"
                          ? "text-blue-400"
                          : "text-gray-400"
                      }`}
                    >
                      {user?.role}
                      {user?.role === "admin" && (
                        <span className="ml-1 px-1 py-0.5 bg-blue-600/20 rounded text-xs">
                          Admin
                        </span>
                      )}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Logout"
                >
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1">
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
