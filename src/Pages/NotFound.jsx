import React from "react";
import { Link } from "react-router-dom";
import error404 from "../assets/Img/Error404.gif";

export default function NotFound() {
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
    title: {
      fontSize: "6rem",
      margin: 0,
      color: "#ff4d4f",
      animation: "bounce 1s infinite",
    },
    message: {
      fontSize: "1.5rem",
      margin: "1rem 0 2rem 0",
      color: "#333",
    },
    image: {
      width: "200px",
      marginBottom: "2rem",
      animation: "moveUpDown 2s infinite",
    },
    link: {
      fontSize: "1.2rem",
      color: "#fff",
      backgroundColor: "#1890ff",
      textDecoration: "none",
      padding: "0.7rem 1.5rem",
      borderRadius: "10px",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Error de Conexión</h1>
      <p style={styles.message}>
        ¡Estimado Cliente! Parece que la conexión entre tu hogar y la pizzería se perdió!.
        Intentalo de nuevo
      </p>
      <img src={error404} alt="Error de Conexión" style={styles.image} />
      <Link to="/" style={styles.link}>
        Volver al inicio
      </Link>
    </div>
  );
}
