import { Outlet, Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthProvider"

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to='/' />;
};