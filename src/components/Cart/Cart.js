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
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="table-header">
                <th scope="col" className="table-header-title">
                  Products
                </th>
                <th scope="col"></th>
                <th scope="col" className="table-header-title">
                  Quantity
                </th>
                <th scope="col" className="table-header-title">
                  Price
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {shoppingCartState.products?.length > 0 ? (
                shoppingCartState.products.map((product) => {
                  return <CardOverview key={product._id} product={product} />;
                })
              ) : (
                <tr>
                  <td>
                    <h5>Shopping Cart is empty!</h5>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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
