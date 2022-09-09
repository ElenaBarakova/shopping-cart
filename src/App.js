import { Routes, Route } from "react-router-dom";

import { Cart } from "./components/Cart/Cart";
import { Products } from "./components/Products/Products";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />

          {/* <Route path="/create" element={<Create />} /> */}
          {/* <Route path="/my-profile" element={<MyProfile />} /> */}
          {/* <Route path="/logout" element={<Logout />} /> */}

          <Route path="/shopping-cart" element={<Cart />} />
          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="/details/:boatId" element={<Details />} /> */}
          {/* <Route path="/*" element={<Error />} /> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
