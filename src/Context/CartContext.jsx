// src/context/CartContext.jsx
import React, { createContext, useState } from "react";

// 1. Crear el contexto
export const CartContext = createContext();

// 2. Crear el provider
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Array de productos en el carrito

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // Si ya existe, solo actualizamos la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prev, product];
      }
    });
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  // Función para limpiar todo el carrito
  const clearCart = () => {
    setCartItems([]);
  };

  // Calcular total
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
