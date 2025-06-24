import { formatCurrency } from "../utils/formatCurrency";

export default function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{name}</h5>

        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="fw-bold text-end mt-3">
          {formatCurrency(price)}
        </p>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-outline-primary btn-sm">Ver más</button>
          <button className="btn btn-outline-success btn-sm">Añadir</button>
        </div>
      </div>
    </div>
  );
}
