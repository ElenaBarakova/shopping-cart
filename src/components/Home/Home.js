import Button from "../Button/Button";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="btn-home-container">
          <Button className="button-home" to="/products">
            VIEW PRODUCTS
          </Button>
        </div>
        {/* <div className="home-image-container">
          <div className="home-image"></div>
        </div> */}
      </div>
    </div>
  );
};
