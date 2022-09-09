import Button from "../Button/Button";
import "./CardOverview.scss";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../actions/shoppingCart";

export const CardOverview = ({ product }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = () => dispatch(removeProduct(product));
  return (
    <div className="overview-card">
      <div className="row g-0">
        <div className="col img-overview-container">
          <img
            src={product.imgUrl}
            className="img-fluid rounded-start img-overview"
            alt="img"
          />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description} </p>
            {/* <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p> */}
          </div>
        </div>
        <div className="quantity-conrainer col-1">
          <h5 className="card-quantity">{product.quantity} pcs</h5>
        </div>
        <div className="price-conrainer col-1">
          <h5 className="card-price">${product.price}</h5>
        </div>
        <div className="btn-del-container col-1">
          <Button className="btn-del" onClick={removeFromCartHandler}>
            &#10005;
          </Button>
        </div>
      </div>
    </div>
  );
};
