import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

import { GlobalState } from "../../GlobalState";
import Title from "../../components/Title";
import Card from "../../components/Card";
import headPhoneImg from "../../assets/headPhone.jpg";
import labtopImg from "../../assets/img.jpg";

function CategoryPage({ category }) {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [img, setImage] = useState("");

  console.log(products, "----------");

  const relatedProducts = products.filter((product) => {
    return product.category === params.name;
  });

  useEffect(() => {
    const setImg = () => {
      if (params.name === "headphones") {
        setImage(headPhoneImg);
      } else if (params.name === "labtops") setImage(labtopImg);
    };
    setImg();
  }, []);

  return (
    <Grid container xs={12}>
      <Grid style={{ width: "100%", height: "400px" }}>
        <img src={img} style={{ width: "100%", height: "100%" }} />
      </Grid>
      <Grid item xs={12}>
        <Title text={`${params.name.toUpperCase()} PRODUCTS`} />
      </Grid>
      <Grid container xs={12}>
        {relatedProducts.map((product) => {
          return <Card product={product} />;
        })}
      </Grid>
    </Grid>
  );
}

export default CategoryPage;
