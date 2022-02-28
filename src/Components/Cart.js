import React from "react";
import "../style.css";
const Cart = (props) => {
  const { cartItems,itemsPrice } = props;
  return (
    <div className="cart">
      {cartItems.length === 0 && <div className="">You Spent Rs.0</div>}
      {cartItems.map((item) => {
        return (
          <div key={item.id} className="cartItems">
            <h3 className="itemName">{item.name}</h3>
            {/* <div className="itemBtn">
              <button onClick={() => onAdd(item)}> +</button>
              <button onClick={() => onRemove(item)}>-</button>
            </div> */}
            <div className="itemQty">
              {item.qty} x Rs.{item.price.toFixed(2)}
            </div>
          </div>
        );
      })}
      {cartItems.length !== 0 && (
        <>
          <hr />
          <div className="totalPrice">You Spent Rs. {itemsPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
