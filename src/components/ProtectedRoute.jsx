// src/components/ProtectedRoute.jsx
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProtectedRoute({ children }) {
  const { user } = useSelector((state) => state.auth);

  if (!user) {
    toast.error("You must be logged in to access this page!");
    return <Navigate to="/login" replace />;
  }

  return children;
}