// src/components/PublicRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function PublicRoute({ children }) {
  const { token } = useContext(UserContext);

  if (token) {
    // Usuario logueado, redirige al home
    return <Navigate to="/" replace />;
  }

  return children;
}
