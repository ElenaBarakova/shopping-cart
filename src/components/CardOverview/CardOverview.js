import Button from "../Button/Button";
import "./CardOverview.scss";

export const CardOverview = ({ product }) => {
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
          <h5 className="card-quantity">Quantity: {product.quantity}</h5>
        </div>
        <div className="price-conrainer col-1">
          <h5 className="card-price">Price: ${product.price}</h5>
        </div>
        <div className="btn-del-container col-1">
          <Button className="btn-del">&#10005;</Button>
        </div>
      </div>
    </div>
  );
};
