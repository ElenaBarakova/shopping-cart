import "./Cart.scss";
// import Button from "../Button/Button";
import { CardOverview } from "../CardOverview/CardOverview";
import { useSelector } from "react-redux";
import Button from "../Button/Button";

export const Cart = () => {
  const shoppingCartState = useSelector((state) => state.shoppingCart);
  console.log(shoppingCartState);

  return (
    <section className="products-overview">
      <div className="tite-container">
        <h3 className="main-title">Added products</h3>
      </div>
      <div className="card-overview-container">
        {shoppingCartState.products?.length > 0 ? (
          shoppingCartState.products.map((product) => {
            return <CardOverview key={product._id} product={product} />;
          })
        ) : (
          <h5>Shopping Cart is empty!</h5>
        )}
      </div>
      <div className="total-container">
        <h4 className="total-price">Total price: {shoppingCartState.total}</h4>
        <Button className="btn-clear-cart">CLEAR CART</Button>
      </div>
      <div className="order-container">
        <Button className="btn-order">MAKE ORDER</Button>
      </div>
    </section>
  );
};
