import "./Header.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as CartIcon } from "../../icons/cart.svg";

export const Header = () => {
  const shoppingCartState = useSelector((state) => state.shoppingCart);

  return (
    <header className="main-header">
      <ul className="menu-container">
        <li className="menu-item">
          <Link className="menu-link-item" to="/">
            Home
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link-item" to="/about">
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link className="menu-link-item" to="/products">
            Products
          </Link>
        </li>
      </ul>
      <div className="menu-cart-item">
        <Link className="menu-link-item  position-relative" to="/shopping-cart">
          <CartIcon className="cart-icon" />
          {shoppingCartState.products.length > 0 && (
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {shoppingCartState.totalProducts}
              <span className="visually-hidden">unread messages</span>
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};
