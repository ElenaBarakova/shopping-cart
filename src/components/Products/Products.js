import { Card } from "../Card/Card";
import "./Products.scss";

import productsData from "../../products.json";

export const Products = () => {
  return (
    <div className="products-container overflow-hidden">
      <div className="row gy-4">
        {productsData.map((product) => {
          return <Card product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};
