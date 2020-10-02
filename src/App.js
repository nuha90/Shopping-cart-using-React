import React, { useState } from "react";
import "./App.css";
// import components
import Render from "./components/products";
import RenderCart from "./components/cart";

const pageProduct = "products";
const pageCart = "cart";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(pageProduct);

  const addToCart = products => {
    setCart([...cart, { ...products }]);
  };

  const navigateTo = nextPage => {
    setPage(nextPage);
  };

  return (
    <div className="App">
      <header>
        <button onClick={() => navigateTo(pageProduct)}>All products</button>
        <button onClick={() => navigateTo(pageCart)}>
          Go to Cart {cart.length}
        </button>
      </header>
      {page === pageProduct && <Render addToCart={addToCart} />}
      {page === pageCart && <RenderCart cart={cart} setCart={setCart} />}
    </div>
  );
}

export default App;
