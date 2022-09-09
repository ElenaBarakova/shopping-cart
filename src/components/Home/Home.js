import Button from "../Button/Button";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="home">
        <div className="home-title-container">
          <h1 className="home-title">HIGH-END MAKEUP PRODUCTS</h1>
        </div>
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
