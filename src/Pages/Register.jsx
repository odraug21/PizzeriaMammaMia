// src/components/Register.jsx
import { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { register } = useContext(UserContext); // <-- contexto
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage('Todos los campos son obligatorios.');
      setError(true);
      return;
    }

    if (password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres.');
      setError(true);
      return;
    }

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      setError(true);
      return;
    }

    try {
      // Petición al backend
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Error al registrar usuario");
        setError(true);
        return;
      }

      // Guardamos token y email en UserContext
      register({ email, token: data.token });

      setMessage('¡Usuario registrado con éxito!');
      setError(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');

      navigate('/profile'); // redirige a perfil
    } catch (err) {
      setMessage('Error de conexión con el servidor');
      setError(true);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registro de Usuario</h2>
      <form className="mx-auto" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico: </label>
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
          <label htmlFor="password" className="form-label">Contraseña: </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirmar contraseña: </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        {message && (
          <div className={`alert ${error ? 'alert-danger' : 'alert-success'}`} role="alert">
            {message}
          </div>
        )}

        <button type="submit" className="btn btn-primary w-100">Registrarse</button>
      </form>
    </div>
  );
}

