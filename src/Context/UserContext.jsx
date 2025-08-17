// src/context/UserContext.jsx
import { createContext, useState } from "react";

// 1. Crear el contexto
export const UserContext = createContext();

// 2. Crear el provider
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(true); // Por defecto true

  // Función logout
  const logout = () => {
    setToken(false);
  };

  return (
    <UserContext.Provider value={{ token, logout }}>
      {children}
    </UserContext.Provider>
  );
};
