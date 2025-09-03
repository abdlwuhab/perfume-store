import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: "عطر الورد", price: 450, qty: 1 },
    { id: 2, name: "عطر الفانيليا", price: 520, qty: 2 },
  ]);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="cart">
      <h2>سلة المشتريات</h2>
      {items.map((item) => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <span>{item.price} EGP × {item.qty}</span>
        </div>
      ))}
      <hr />
      <h3>الإجمالي: {total} EGP</h3>
      <button>إتمام الشراء</button>
    </div>
  );
}

export default Cart;
