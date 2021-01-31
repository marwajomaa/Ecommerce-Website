import React from "react";
import HeroSection from "../../components/HeroSection";
import Categories from "../../components/Categories";
import BestSelling from "./BestSelling";
import FeaturedProducts from "./FeaturedProducts";
import SalesSlider from "./SalesSlider";

function HomePage() {
  return (
    <div style={{ width: "100%" }}>
      <HeroSection />
      <Categories />
      <BestSelling />
      <FeaturedProducts />
      <SalesSlider />
    </div>
  );
}

export default HomePage;
