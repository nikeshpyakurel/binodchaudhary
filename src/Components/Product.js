import React from "react";
import "../style.css";
const Product = (props) => {
  const { product, onAdd, onRemove,netPrice,newPrice} = props;
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="btnsPrice">

      <button onClick={() => onAdd(product)} className={product.price<=newPrice ? "":"disable"}> +</button>
       Rs.{product.price.toFixed(2)}
      <button onClick={() => onRemove(product)} className={newPrice<=(netPrice-product.price) || product.price> newPrice ?"":"disable"}>-</button>
      </div>
    </div>
  );
};

export default Product;
