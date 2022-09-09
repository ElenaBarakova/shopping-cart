import "./Cart.scss";
// import Button from "../Button/Button";
import { CardOverview } from "../CardOverview/CardOverview";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import { clearCart } from "../../actions/shoppingCart";
export const Cart = () => {
  const shoppingCartState = useSelector((state) => state.shoppingCart);

  const dispatch = useDispatch();
  const clearCartHandler = () => dispatch(clearCart());

  return (
    <section className="products-overview">
      <div className="tite-container">
        <h3 className="main-title">
          Added products - {shoppingCartState.totalProducts}
        </h3>
      </div>

      <div className="card-overview-container">
        <div className="row g-0 table-header">
          <div className="col-1"></div>
          <div className="col-8"></div>
          <div className="col-1">
            <h5>Quantity:</h5>
          </div>
          <div className="col-1">
            <h5>Price per product:</h5>
          </div>

          <div className="col-1"></div>
        </div>

        {shoppingCartState.products?.length > 0 ? (
          shoppingCartState.products.map((product) => {
            return <CardOverview key={product._id} product={product} />;
          })
        ) : (
          <h5>Shopping Cart is empty!</h5>
        )}
      </div>
      <div className="total-container">
        <h4 className="total-price">Total price: ${shoppingCartState.total}</h4>
        <Button className="btn-clear-cart" onClick={clearCartHandler}>
          CLEAR CART
        </Button>
      </div>
      <div className="order-container">
        <Button className="btn-order">MAKE ORDER</Button>
      </div>
    </section>
  );
};
