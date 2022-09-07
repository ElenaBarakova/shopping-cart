import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="main-header">
      {/* <img
        className="logo"
        src="https://e7.pngegg.com/pngimages/530/1002/png-clipart-pai-skincare-copaiba-deep-cleanse-aha-mask-pai-rosehip-bioregenerate-oil-mask-face-acid-thumbnail.png"
        alt="logo"
      /> */}
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
        <li className="menu-item">
          <Link className="menu-link-item" to="/shopping-cart">
            Shopping Cart
          </Link>
        </li>
      </ul>
    </header>
  );
};
