import Button from "../Button/Button";
import "./CardOverview.scss";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../actions/shoppingCart";

export const CardOverview = ({ product }) => {
  const dispatch = useDispatch();
  const removeFromCartHandler = () => dispatch(removeProduct(product));
  return (
    <tr className="overview-card">
      <td className="img-overview-container">
        <img
          src={product.imgUrl}
          className="img-fluid rounded-start img-overview"
          alt="img"
        />
      </td>
      <td className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description} </p>
      </td>
      <td className="quantity-conrainer ">
        <h5 className="card-quantity">{product.quantity} pcs</h5>
      </td>
      <td className="price-conrainer">
        <h5 className="card-price">${product.price}</h5>
      </td>
      <td className="btn-del-container">
        <Button className="btn-del" onClick={removeFromCartHandler}>
          &#10005;
        </Button>
      </td>
    </tr>
  );
};
