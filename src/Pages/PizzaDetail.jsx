import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PizzaDetail = ({ id: propId }) => {
  const { id: paramId } = useParams(); // id de la URL
  const pizzaId = propId || paramId;   // usamos propId si existe, si no el de la URL

  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!pizzaId) return;

    setLoading(true);
    fetch(`http://localhost:5000/api/pizzas/${pizzaId}`)
      .then(res => {
        if (!res.ok) throw new Error('Error al obtener la pizza');
        return res.json();
      })
      .then(data => {
        setPizza(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [pizzaId]);

  if (loading) return <p>Cargando pizza...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return null;

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
          <p><strong>Descripción:</strong> {pizza.desc}</p>
          <p><strong>Precio:</strong> ${pizza.price}</p>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;


