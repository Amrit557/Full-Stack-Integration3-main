import React from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, increaseQty, decreaseQty, clearCart } from "./features/cart/cartSlice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  const handleAdd = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1>Redux Toolkit — Shopping Cart</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <ProductList onAdd={handleAdd} />
        </div>
        <div style={{ width: 360 }}>
          <Cart
            items={items}
            totalQuantity={totalQuantity}
            totalAmount={totalAmount}
            onIncrease={(id) => dispatch(increaseQty(id))}
            onDecrease={(id) => dispatch(decreaseQty(id))}
            onRemove={(id) => dispatch(removeItem(id))}
            onClear={() => dispatch(clearCart())}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
