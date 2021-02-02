import React from "react";
import HeroSection from "../../components/HeroSection";
import Categories from "../../components/Categories";
import BestSelling from "./BestSelling";
import FeaturedProducts from "./FeaturedProducts";
import Layout from "../../components/Layout";

function HomePage() {
  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Layout>
        <HeroSection />
        <Categories />
        <BestSelling />
        <FeaturedProducts />
      </Layout>
    </div>
  );
}

export default HomePage;
