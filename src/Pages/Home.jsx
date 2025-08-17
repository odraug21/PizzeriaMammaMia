// src/pages/Home.jsx
import { useContext, useState } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import PizzaDetail from './PizzaDetail';
import { CartContext } from "../context/CartContext";
import { PizzaContext } from "../context/PizzaContext"; // <-- Importamos el contexto de pizzas

const Home = () => {
  const { pizzas, loading } = useContext(PizzaContext); // <-- Consumimos las pizzas
  const { addToCart } = useContext(CartContext);       // <-- Consumimos addToCart
  const [pizzaDestacadaId, setPizzaDestacadaId] = useState('p003');

  return (
    <div>
      <Header />

      {/* Pizza destacada */}
      <section className="my-4">
        <h1>Detalle Pizza Destacada</h1>
        <PizzaDetail id={pizzaDestacadaId} />
      </section>

      {/* Listado de pizzas */}
      <div className="container mt-4">
        <div className="row g-4 justify-content-center">
          {loading ? (
            <p>Cargando pizzas...</p>
          ) : (
            pizzas.map((pizza) => (
              <div key={pizza.id} className="col-auto">
                <CardPizza
                  id={pizza.id}
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  img={pizza.img}
                  desc={pizza.desc}
                  onClick={() => setPizzaDestacadaId(pizza.id)}
                  onAddToCart={() =>
                    addToCart({ 
                      id: pizza.id,
                      name: pizza.name,
                      price: pizza.price,
                      img: pizza.img,
                      quantity: 1
                    })
                  }
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
