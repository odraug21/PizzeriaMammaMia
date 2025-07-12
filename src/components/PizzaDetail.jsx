import React, { useEffect, useState } from 'react';

const PizzaDetail = ({ id }) => {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // No hacer nada si no hay id

    setLoading(true);
    fetch(`http://localhost:5000/api/pizzas/${id}`)
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
  }, [id]);

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
      <p><strong>Descripción:</strong> {pizza.desc || pizza.description}</p>
      <p><strong>Precio:</strong> ${pizza.price}</p>
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
    </div>
  </div>
</div>
  );
};

export default PizzaDetail;


