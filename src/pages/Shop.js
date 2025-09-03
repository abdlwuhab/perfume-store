import React from "react";
import ProductList from "../components/ProductList";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center py-10">تسوق العطور</h1>
      <ProductList />
    </div>
  );
};

export default Shop;
