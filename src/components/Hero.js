// Hero.js
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>اكتشف عالم العطور الفاخرة</h1>
        <p>تشكيلة مميزة من أرقى العطور تناسب جميع الأذواق</p>
        <button>تسوق الآن</button>
      </div>
    </section>
  );
};

export default Hero;
