import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-3xl font-bold mb-6">سلة المشتريات</h1>

      {cart.length === 0 ? (
        <p>السلة فارغة حالياً</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 shadow rounded"
            >
              <span>{item.name}</span>
              <span>{item.price} EGP</span>
              <button
                onClick={() => removeFromCart(item)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          ))}
          <div className="text-right mt-6">
            <p className="text-xl font-bold">الإجمالي: {total} EGP</p>
            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
              إتمام الشراء
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
