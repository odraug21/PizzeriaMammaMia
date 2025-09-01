// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";
import { formatCurrency } from "../utils/formatCurrency";

export default function Navbar() {
  const { total } = useContext(CartContext);
  const { isAuthenticated, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <Link className="navbar-brand" to="/">
        Pizzería Mamma Mía!
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              🏠 Home
            </Link>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-2">
          {/* Botón Carrito con total dinámico */}
          <Link to="/cart" className="btn btn-outline-light btn-sm">
            🛒 Total: {formatCurrency(total)}
          </Link>

          {/* Botones condicionales según login */}
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="btn btn-outline-light btn-sm">
                🔓 Profile
              </Link>
              <button
                onClick={logout}
                className="btn btn-outline-light btn-sm"
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light btn-sm">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light btn-sm">
                🔐 Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}




