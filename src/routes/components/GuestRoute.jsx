import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

function GuestRoute({ children }) {
  const isAuthorized = useAuth();
  return !isAuthorized ? children : <Navigate to="/me" />;
}

export default GuestRoute;
