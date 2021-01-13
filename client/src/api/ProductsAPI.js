import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductsAPI() {
  const [products, setProducts] = useState([]);
  const [callback, setCallback] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get("/api/products");
      setProducts(res.data.products);
    };
    getProducts();
  }, [callback]);

  const getProducts = async () => {
    const res = await axios.get("/api/products");
    setProducts(res.data.products);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`/api/products/product/${id}`);
    alert("product deleted successfully");
  };

  const createProduct = async (product) => {
    try {
      const res = await axios.post("/api/products", product);
      alert(res.data.msg);
    } catch (err) {
      console.log(err.message);
    }
  };

  const editProduct = async (id, product) => {
    try {
      const res = await axios.patch(`/api/products/product/${id}`, product);
      alert(res.data.msg);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products: [products, setProducts],
    deleteProduct,
    createProduct,
    editProduct,
    callback: [callback, setCallback],
  };
}

export default ProductsAPI;
