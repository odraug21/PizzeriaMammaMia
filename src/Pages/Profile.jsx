// src/Pages/Profile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  // Email de ejemplo, puedes reemplazarlo con estado o props según tu app
  const [email] = useState("OdraugProyectos@Gmail.com");

  const handleLogout = () => {
    // Codigo para token o un estado de perfil de usuario, ahora solo va al login
    
    navigate("/login");
  };

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#fff8f0",
      padding: "2rem",
    },
    email: {
      fontSize: "1.5rem",
      marginBottom: "2rem",
      color: "#333",
    },
    button: {
      fontSize: "1.2rem",
      color: "#fff",
      backgroundColor: "#ff4d4f",
      border: "none",
      padding: "0.7rem 1.5rem",
      borderRadius: "10px",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Perfil del Usuario</h1>
      <p style={styles.email}>{email}</p>
      <button style={styles.button} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}
