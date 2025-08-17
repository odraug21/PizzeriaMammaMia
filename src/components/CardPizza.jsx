import { formatCurrency } from "../utils/formatCurrency";

export default function CardPizza({ name, price, ingredients, img, desc, onClick, onAddToCart }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      <img 
        src={img} 
        className="card-img-top" 
        alt={name} 
        onClick={onClick} 
        style={{ cursor: "pointer" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title">{name}</h5>

        <p className="card-text text-muted small" style={{ minHeight: "80px" }}>
          {desc}
        </p>

        <ul className="list-unstyled">
          {ingredients.map((ingredient, index) => (
            <li key={index}>🍕 {ingredient}</li>
          ))}
        </ul>

        <p className="fw-bold text-end mt-3">
          {formatCurrency(price)}
        </p>

        <div className="d-flex justify-content-between mt-3">
          <button 
            className="btn btn-outline-primary btn-sm" 
            onClick={onClick}
          >
            Ver más
          </button>
          <button 
            className="btn btn-outline-success btn-sm" 
            onClick={onAddToCart}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

