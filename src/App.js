import { useState } from "react";
import Card from "./Components/Card";
import "./style.css";
import Cart from "./Components/Cart";
import data from "./data";
import Header from "./Components/Header";
function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  const netPrice=  1630000000;
  const newPrice=netPrice-itemsPrice;
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="mainContainer">
      <Header itemsPrice={itemsPrice} newPrice={newPrice}/>
      <div className="App">
        <Card
          products={products}
          onAdd={onAdd}
          onRemove={onRemove}
          netPrice={netPrice}
          cartItems={cartItems}
          newPrice={newPrice}
        />
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          netPrice={netPrice}
          newPrice={newPrice}
          itemsPrice={itemsPrice}
        />
      </div>
    </div>
  );
}

export default App;
