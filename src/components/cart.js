import React from "react";

const RenderCart = ({ cart, setCart }) => {
  const sumCart = () => {
    return cart.reduce((sum, { cost }) => sum + cost, 0);
  };

  const removeFromCart = removedProduct => {
    setCart(cart.filter(product => product !== removedProduct));
  };

  const removeAllProducts = () => {
    setCart([]);
  };
  return (
    <>
      <h1>Cart</h1>
      <p>cost : {sumCart()}$</p>
      <button onClick={removeAllProducts}>Clear Cart</button>
      <div className="products">
        {cart.map((product, idx) => {
          return (
            <div key={idx}>
              <h3> {product.name}</h3>
              <h4>{product.cost}$</h4>
              <img src={product.image} alt="img"></img>
              <br></br>
              <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default RenderCart;
