import React, { useState } from "react";

const Render = ({ addToCart }) => {
  let FURNITURE = "furniture";
  let UTILITY = "utility";
  const [products] = useState([
    {
      catogory: FURNITURE,
      name: "Table",
      cost: 600,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT_QknBYCg8RMbNDP9rVhQVVqEXgNIKTrkVSMgShN88EhQs-_BCBB5WC1Idaxxb2ki8Dy3DTKo&usqp=CAc",
    },
    {
      catogory: UTILITY,
      name: "Chair",
      cost: 500,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbmkHRQvrBJNw5qOaOyE-fExYlL3QwaCq0nZhGv1pWlYUfYNKY0nXT4ThUBHlAo6WJ6TW2D5U&usqp=CAc",
    },
  ]);

  return (
    <>
      <h1>Products</h1>
      <select>
        <option value={FURNITURE}>FURNITURE</option>
        <option value={UTILITY}>UTILITY</option>
      </select>
      <div className="products">
        {products.map((product, idx) => (
          <div className="product" key={idx}>
            <h3> {product.name}</h3>
            <h4>{product.cost}$</h4>
            <img src={product.image} alt="img"></img>
            <br></br>
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </div>
        ))}
      </div>
    </>
  );
};
export default Render;
