import { useSelector } from "react-redux";

// import Button from "../Button/Button";

import { Card } from "../Card/Card";
import "./Products.scss";

import productsData from "../../products.json";

export const Products = () => {
  const shoppingCartState = useSelector((state) => state.shoppingCart);

  return (
    <div className="products-container overflow-hidden">
      <h1>current count {shoppingCartState?.products.length}</h1>
      <div className="row gy-4">
        {productsData.map((product) => {
          return <Card product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};
