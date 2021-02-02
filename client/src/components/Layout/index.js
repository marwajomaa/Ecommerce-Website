import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import SalesSlider from "../SalesSlider.js";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <SalesSlider />
      <Footer />
    </>
  );
}

export default Layout;
