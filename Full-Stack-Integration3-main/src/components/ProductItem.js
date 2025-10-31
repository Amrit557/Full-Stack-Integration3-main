import React from "react";

export default function ProductItem({ product, onAdd }) {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 8 }}>
      <h4 style={{ margin: "0 0 6px 0" }}>{product.name}</h4>
      <div>Price: ₹{product.price}</div>
      <button style={{ marginTop: 8 }} onClick={() => onAdd(product)}>
        Add to cart
      </button>
    </div>
  );
}
