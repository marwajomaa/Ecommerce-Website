import React, { useContext, useState } from "react";
import { Typography, Grid, Checkbox } from "@material-ui/core";
import { GlobalState } from "../../GlobalState";
import ProductItem from "./ProductItem";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  const [isCheck, setIsCheck] = useState(false);
  if (products.length === 0) return <Loading />;

  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };

  const checkAll = () => {
    products.forEach((product) => (product.checked = !product.checked));
    setProducts([...products]);
    setIsCheck(true);
  };

  return (
    <Grid container spacing={3}>
      <Grid>
        <Typography variant="h6" component="span">
          Check All
        </Typography>
        <Checkbox checked={isCheck} onChange={checkAll} />
        <Button text="Delete All" />
      </Grid>
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
