import { Routes, Route } from "react-router-dom";

import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/shopping-cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
