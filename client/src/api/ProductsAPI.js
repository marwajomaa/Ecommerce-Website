import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductsAPI() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data.products);
  };

  const deleteProduct = async (id) => {
    const res = await axios.delete(`/api/products//product/${id}`);
    alert("product deleted successfully");
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: [products, setProducts],
    deleteProduct,
  };
}

export default ProductsAPI;
