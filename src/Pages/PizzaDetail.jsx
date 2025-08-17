// src/pages/PizzaDetail.jsx
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const PizzaDetail = ({ id }) => {
  const { pizzas, loading } = useContext(PizzaContext); // <-- Consumimos el contexto
  const pizza = pizzas.find((p) => p.id === id);

  if (loading) return <p>Cargando pizza...</p>;
  if (!pizza) return <p>Pizza no encontrada</p>;

  return (
    <div className="card mb-4 p-3" style={{ maxWidth: '900px' }}>
      <div className="d-flex flex-column flex-md-row align-items-start gap-3">
        <img 
          src={pizza.img} 
          alt={pizza.name} 
          style={{ width: '200px', height: '200px', borderRadius: '8px', flexShrink: 0 }} 
        />
        <div className="flex-grow-1">
          <h3 className="card-title text-capitalize">{pizza.name}</h3>
          <p><strong>Descripción:</strong> {pizza.desc || pizza.description}</p>
          <p><strong>Precio:</strong> ${pizza.price}</p>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;

