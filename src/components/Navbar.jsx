import { formatCurrency } from "../utils/formatCurrency";

export default function Navbar({ setVistaActual }) {
  const total = 25000; // Valor referencial
  const token = false; // simula si el usuario está logueado

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <a
        className="navbar-brand"
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setVistaActual('home');
        }}
      >
        Pizzería Mamma Mía!
      </a>
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
          {/* Botón Home (siempre visible) */}
          <li className="nav-item">
            <a
              className="nav-link active"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setVistaActual('home');
              }}
            >
              🏠 Home
            </a>
          </li>
        </ul>

        <div className="d-flex align-items-center gap-2">
          {/* Botón Carrito */}
          <button
            className="btn btn-outline-light btn-sm"
            onClick={() => setVistaActual('cart')}
          >
            🛒 Carrito
          </button>

          {/* Botón Total (siempre visible) 
          <button className="btn btn-outline-light btn-sm">
            🛒 Total: {formatCurrency(total)}
          </button>*/}

          {/* Botones condicionales según login */}
          {token ? (
            <>
              <button className="btn btn-outline-light btn-sm">🔓 Profile</button>
              <button className="btn btn-outline-light btn-sm">🔒 Logout</button>
            </>
          ) : (
            <>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setVistaActual('login')}
              >
                🔐 Login
              </button>
              <button
                className="btn btn-outline-light btn-sm"
                onClick={() => setVistaActual('register')}
              >
                🔐 Register
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

