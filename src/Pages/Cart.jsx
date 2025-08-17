// src/components/Cart.jsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext"; // <-- Importa UserContext
import { formatCurrency } from "../utils/formatCurrency";

export default function Cart() {
  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const { token } = useContext(UserContext); // <-- Consumimos token

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="card mb-3 shadow-sm"
              style={{ maxWidth: "540px", margin: "auto" }}
            >
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{item.name}</h5>
                    <p className="card-text fw-bold mb-1">
                      Precio: {formatCurrency(item.price)}
                    </p>
                    <p className="card-text mb-1">
                      Cantidad:
                      <button
                        className="btn btn-outline-secondary btn-sm mx-2"
                        onClick={() => removeFromCart(item.id)}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm mx-2"
                        onClick={() => addToCart({ ...item, quantity: 1 })}
                      >
                        +
                      </button>
                    </p>
                    <p className="card-text text-end">
                      Subtotal: <strong>{formatCurrency(item.price * item.quantity)}</strong>
                    </p>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <h4>Total: {formatCurrency(total)}</h4>
            <button 
              className="btn btn-success mt-2"
              disabled={!token} // <-- Botón deshabilitado si token es false
            >
              Pagar
            </button>
          </div>
        </>
      )}
    </div>
  );
}

