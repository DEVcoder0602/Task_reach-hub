import { Link } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image">
          <img
            src={product.image}
            alt=""
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div className="product-details">
          <div className="title-price">
            <h3 className="product-title">{product.title.slice(0, 20)}</h3>
            <h3 className="product-price">₹{product.price}</h3>
          </div>
          <div className="other-details">
            <p className="product-subtitle">
              {product.description.slice(0, 40)}...
            </p>
            <p className="product-rating">
              {`${product.rating.rate} (${product.rating.count})`}{" "}
            </p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
