import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/Auth";

const AdminRoute = () => {
  const [auth] = useAuth();

  if (!auth?.user) {
    return <Navigate to="/login" />;
  }

  // Check admin role: 1 = admin
  if (auth.user.role !== 1) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default AdminRoute;
