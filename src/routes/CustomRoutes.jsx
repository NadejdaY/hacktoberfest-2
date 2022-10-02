import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Login from "../pages/Login/Login";
import Me from "../pages/Me/Me";
import GuestRoute from "./components/GuestRoute";
import Registration from "../pages/Registration/Registration";
import PrivateRoute from "./components/PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/login"
        element={
          <GuestRoute>
            <Login />
          </GuestRoute>
        }
      />
      <Route
        path="/registration"
        element={
          <GuestRoute>
            <Registration />
          </GuestRoute>
        }
      />
      <Route
        path="/me"
        element={
          <PrivateRoute>
            <Me />
          </PrivateRoute>
        }
      />
      <Route path="/not-found-404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found-404" />} />
    </Routes>
  );
}

export default CustomRoutes;
