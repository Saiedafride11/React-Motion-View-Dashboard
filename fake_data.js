export const sidebarNavigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "📊",
    roles: ["admin", "user"],
  },
  { name: "Users", href: "/users", icon: "👥", roles: ["admin"] },
  { name: "Profile", href: "/profile", icon: "👤", roles: ["admin", "user"] },
];

export const mockUsersList = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-01-20",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "user",
    status: "inactive",
    createdAt: "2024-02-01",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "user",
    status: "active",
    createdAt: "2024-02-10",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    email: "charlie@example.com",
    role: "admin",
    status: "active",
    createdAt: "2024-02-15",
  },
];

export const recentSystemActivity = [
  {
    action: "New user registered",
    user: "john.doe@example.com",
    time: "2 minutes ago",
    type: "user",
  },
  {
    action: "Project completed",
    user: "Website Redesign",
    time: "1 hour ago",
    type: "project",
  },
  {
    action: "User updated profile",
    user: "jane.smith@example.com",
    time: "3 hours ago",
    type: "user",
  },
  {
    action: "New project created",
    user: "Mobile App Development",
    time: "5 hours ago",
    type: "project",
  },
  {
    action: "User logged in",
    user: "admin@example.com",
    time: "6 hours ago",
    type: "auth",
  },
];

export const recentMyActivity = [
  {
    action: "Completed task",
    item: "Update user profile",
    time: "2 hours ago",
  },
  {
    action: "Started project",
    item: "Website redesign",
    time: "1 day ago",
  },
  {
    action: "Updated profile",
    item: "Changed email address",
    time: "3 days ago",
  },
];
