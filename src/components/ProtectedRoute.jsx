// src/components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function ProtectedRoute({ children, requireAuth = true }) {
  const { token } = useContext(UserContext);

  // Si requireAuth es true y no hay token -> redirige a login
  if (requireAuth && !token) {
    return <Navigate to="/login" replace />;
  }

  // Si requireAuth es false (páginas públicas como login/register) y hay token -> redirige a home
  if (!requireAuth && token) {
    return <Navigate to="/" replace />;
  }

  // Si todo bien, renderiza el componente hijo
  return children;
}
