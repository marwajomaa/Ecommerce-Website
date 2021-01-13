import { Typography, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import ProductItem from "./ProductItem";
import Loading from "../../components/Loading";

function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  if (products.length === 0) return <Loading />;

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };
  return (
    <Grid container spacing={3}>
      {products &&
        products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              handleCheck={handleCheck}
            />
          );
        })}
    </Grid>
  );
}

export default Products;
