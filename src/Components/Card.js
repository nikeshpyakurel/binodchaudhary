import React from "react";
import Product from "./Product";
import "../style.css";
const Card = (props) => {
  const { cartItems, products, onAdd, onRemove,newPrice,netPrice } = props;
  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            newPrice={newPrice}
            product={product}
            onAdd={onAdd}
            netPrice={netPrice}
            cartItems={cartItems}
            onRemove={onRemove}
          />
        );
      })}
    </div>
  );
};

export default Card;
