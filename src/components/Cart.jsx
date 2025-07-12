// src/components/Cart.jsx
import { useState } from "react";
import { pizzaCart } from "../utils/pizzas";
import { formatCurrency } from "../utils/formatCurrency";

export default function Cart() {
  const [cart, setCart] = useState(pizzaCart);

  // Función para aumentar la cantidad
  const increase = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setCart(updated);
  };

  // Función para disminuir la cantidad
  const decrease = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id ? { ...item, count: item.count - 1 } : item
      )
      .filter((item) => item.count > 0); // elimina si llega a 0
    setCart(updated);
  };

  // Calcular total
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p className="text-center">Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map((item) => (
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
                        onClick={() => decrease(item.id)}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm mx-2"
                        onClick={() => increase(item.id)}
                      >
                        +
                      </button>
                    </p>
                    <p className="card-text text-end">
                      Subtotal:{" "}
                      <strong>
                        {formatCurrency(item.price * item.count)}
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <h4>Total: {formatCurrency(total)}</h4>
            <button className="btn btn-success mt-2">Pagar</button>
          </div>
        </>
      )}
    </div>
  );
}
