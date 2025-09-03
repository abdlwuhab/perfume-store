import React from "react";
import "./Testimonials.css";

function Testimonials() {
  const reviews = [
    { id: 1, name: "سارة", text: "أجمل عطر جربته في حياتي!" },
    { id: 2, name: "محمد", text: "خدمة ممتازة وتوصيل سريع." },
    { id: 3, name: "نور", text: "عطور راقية وروائح مميزة جداً." },
  ];

  return (
    <section className="testimonials">
      <h2>آراء عملائنا</h2>
      <div className="reviews">
        {reviews.map((r) => (
          <div key={r.id} className="review">
            <p>"{r.text}"</p>
            <span>- {r.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
