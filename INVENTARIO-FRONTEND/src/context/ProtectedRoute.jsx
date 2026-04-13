import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

export const ProtectedRoute = ({ roles, redirectTo = "/" }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  if (user && roles === user.data.role) {
    return <Navigate to={"/dashboard"} replace />;
  }
  return <Outlet />;
};
