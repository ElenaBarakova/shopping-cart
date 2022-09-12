import Button from "../Button/Button";
import "./Card.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/shoppingCart";

export const Card = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = () => dispatch(addProduct(product));
  return (
    <div className="col-12 col-md-6 col-lg-3 product-card">
      <div className="card product-card">
        <div className="card-img-container">
          <img src={product.imgUrl} className="card-img-top" alt="img" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
        </div>
        <div className="price-container">
          <h5 className="card-price">${product.price}</h5>
        </div>
        <div className="btn-buy-container">
          <Button className="btn-buy" onClick={addToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};
