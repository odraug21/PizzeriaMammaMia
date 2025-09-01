// src/context/UserContext.jsx
import { createContext, useState, useEffect } from "react";

// Creación contexto
export const UserContext = createContext();

// Creación provider
export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  // Valida login
  const login = ({ email, token }) => {
    setEmail(email);
    setToken(token);
    setIsAuthenticated(true);
    localStorage.setItem("token", token);
  };

  // Valida logout
  const logout = () => {
    setEmail(null);
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  // Función register, valida el usuario
  const register = async (email, password) => {
    setAuthLoading(true);
    setAuthError(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.message || "Error al registrar usuario");
        setAuthLoading(false);
        return false;
      }

      login({ email, token: data.token });
      setAuthLoading(false);
      return true;
    } catch (err) {
      setAuthError("Error de conexión con el servidor");
      setAuthLoading(false);
      return false;
    }
  };

  // Proceso login con backend
  const loginWithBackend = async (email, password) => {
    setAuthLoading(true);
    setAuthError(null);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setAuthError(data.message || "Error al iniciar sesión");
        setAuthLoading(false);
        return false;
      }

      login({ email, token: data.token });
      setAuthLoading(false);
      return true;
    } catch (err) {
      setAuthError("Error de conexión con el servidor");
      setAuthLoading(false);
      return false;
    }
  };

  // Obtiene el perfil del usuario
  const getProfile = async () => {
    if (!token) return;
    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (res.ok) setEmail(data.email);
    } catch (err) {
      console.error(err);
    }
  };

  //  Carga el perfil al montar si hay token
  useEffect(() => {
    if (token && !email) getProfile();
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        email,
        token,
        isAuthenticated,
        authLoading,
        authError,
        login: loginWithBackend,
        logout,
        register,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};


