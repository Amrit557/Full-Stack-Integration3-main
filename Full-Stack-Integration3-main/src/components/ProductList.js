import React from "react";
import ProductItem from "./ProductItem";

const PRODUCTS = [
  { id: "p1", name: "T-Shirt", price: 299 },
  { id: "p2", name: "Jeans", price: 999 },
  { id: "p3", name: "Sneakers", price: 1999 }
];

export default function ProductList({ onAdd }) {
  return (
    <div>
      <h3>Products</h3>
      {PRODUCTS.map(p => (
        <ProductItem key={p.id} product={p} onAdd={onAdd} />
      ))}
    </div>
  );
}
