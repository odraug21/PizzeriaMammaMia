// src/context/UserContext.jsx
import { createContext, useState } from "react";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Crear el provider
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null); // ahora null al inicio
  const [user, setUser] = useState(null);   // guarda info del usuario logueado

  // Función para login
  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en login");

      const data = await response.json();
      setToken(data.token);
      setUser(data.user); // depende de lo que devuelva tu API
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Función para register
  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) throw new Error("Error en register");

      const data = await response.json();
      setToken(data.token);
      setUser(data.user);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  // Función para logout
  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

