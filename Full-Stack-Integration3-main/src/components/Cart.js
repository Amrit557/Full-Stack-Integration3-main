import React from "react";

export default function Cart({ items, totalQuantity, totalAmount, onIncrease, onDecrease, onRemove, onClear }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Shopping Cart</h3>
      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div>
          {items.map(it => (
            <div key={it.id} style={{ display: "flex", justifyContent: "space-between", padding: 8, borderBottom: "1px solid #eee" }}>
              <div>
                <div><strong>{it.name}</strong></div>
                <div>₹{it.price} × {it.quantity} = ₹{it.price * it.quantity}</div>
                <div style={{ marginTop: 6 }}>
                  <button onClick={() => onDecrease(it.id)}>-</button>
                  <button onClick={() => onIncrease(it.id)} style={{ marginLeft: 6 }}>+</button>
                  <button onClick={() => onRemove(it.id)} style={{ marginLeft: 8 }}>Remove</button>
                </div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 10 }}>
            <div><strong>Total items:</strong> {totalQuantity}</div>
            <div><strong>Amount:</strong> ₹{totalAmount}</div>
            <button onClick={onClear} style={{ marginTop: 8 }}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}
