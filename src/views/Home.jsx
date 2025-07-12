import { useEffect, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import PizzaDetail from '../components/PizzaDetail';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaDestacadaId, setPizzaDestacadaId] = useState('p003'); // Id fijo por defecto

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error al cargar las pizzas:', error);
      }
    };

    fetchPizzas();
  }, []);

  return (
    <div>
      <Header />
      {/* Pizza destacada, recibe id dinámico */}
      <section className="my-4">
        <h1>Detalle Pizza Destacada</h1>
        <PizzaDetail id={pizzaDestacadaId} />
      </section>

      {/* Listado de pizzas */}
      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-auto">
              <CardPizza
                id={pizza.id}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
                desc={pizza.desc}
                onClick={() => setPizzaDestacadaId(pizza.id)} // Cambia pizza destacada al hacer click
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;