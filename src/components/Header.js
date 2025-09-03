// Header.js
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">PerfumeX</div>
      <nav>
        <ul>
          <li><a href="#home">الرئيسية</a></li>
          <li><a href="#shop">المتجر</a></li>
          <li><a href="#about">من نحن</a></li>
          <li><a href="#contact">تواصل</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
