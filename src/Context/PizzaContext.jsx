// src/context/PizzaContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar las pizzas:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas, loading }}>
      {children}
    </PizzaContext.Provider>
  );
};
