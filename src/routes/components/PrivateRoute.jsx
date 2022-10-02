import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function PrivateRoute({ children }) {
  const isAuthorized = useAuth();
  return isAuthorized ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
