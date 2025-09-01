// src/components/Login.jsx
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, authLoading, authError } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) return;

    const success = await login(email, password);

    if (success) {
      navigate("/profile"); // Redirige a perfil si login correcto
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Iniciar Sesión</h2>
      <form
        className="mx-auto"
        style={{ maxWidth: "500px" }}
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Correo electrónico:
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Contraseña:
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {authError && (
          <div className="alert alert-danger" role="alert">
            {authError}
          </div>
        )}

        <button
          type="submit"
          className="btn btn-success w-100"
          disabled={authLoading}
        >
          {authLoading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>
    </div>
  );
}

