// src/pages/Profile.jsx
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  const navigate = useNavigate();
  const { email, getProfile, logout, token } = useContext(UserContext);

  // Si no hay token, redirige al login
  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (!email) {
      getProfile(); // poblar email si recargaste
    }
  }, [token, email, getProfile, navigate]);

  const handleLogout = () => {
    logout();          // cerramos sesión real
    navigate("/login"); // redirigimos al login
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
      <p style={styles.email}>{email || "Cargando..."}</p>
      <button style={styles.button} onClick={handleLogout}>
        Cerrar sesión
      </button>
    </div>
  );
}

