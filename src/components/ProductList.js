import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList() {
  const products = [
    { id: 1, name: "عطر الورد", price: 450, image: "/images/perfume1.jpg" },
    { id: 2, name: "عطر الفانيليا", price: 520, image: "/images/perfume2.jpg" },
    { id: 3, name: "عطر العود", price: 600, image: "/images/perfume3.jpg" },
  ];

  return (
    <div className="product-list">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
