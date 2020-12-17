import { Typography, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { GlobalState } from "../../GlobalState";
import ProductItem from "./ProductItem";

function Products() {
  const state = useContext(GlobalState);
  const { products } = state.productsAPI;
  console.log(products);
  return (
    <Grid container spacing={3}>
      {products ? (
        products.map((product) => {
          return <ProductItem />;
        })
      ) : (
        <Typography>Loading...</Typography>
      )}
    </Grid>
  );
}

export default Products;
