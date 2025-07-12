// src/views/Home.jsx
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { pizzas } from '../utils/pizzas';



const Home = () => {
  return (
    <div>
      <Header />
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

