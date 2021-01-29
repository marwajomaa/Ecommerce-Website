import React from "react";
import HeroSection from "../../components/HeroSection";
import Categories from "../../components/Categories";

function HomePage() {
  return (
    <div style={{ width: "100%" }}>
      <HeroSection />
      <Categories />
    </div>
  );
}

export default HomePage;
