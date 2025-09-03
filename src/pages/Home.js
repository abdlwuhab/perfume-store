import React from "react";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import "./Home.css"; 

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductList />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
