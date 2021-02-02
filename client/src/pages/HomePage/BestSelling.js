import React, { useState, useEffect, useContext } from "react";
import { Grid, Box } from "@material-ui/core";

import { GlobalState } from "../../GlobalState";
import Title from "../../components/Title";
import ImageBox from "../../components/ImageBox";

function BestSelling() {
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;

  const besSelling = products.sort((a, b) => b.sold - a.sold).slice(0, 3);

  return (
    <section>
      <Grid container xs={12}>
        <Grid item xs={12}>
          <Title text="BEST SELLING" />
          <Grid container xs={12} spacing={2} style={{ margin: "0 auto" }}>
            {besSelling.map((product) => {
              return <ImageBox product={product} />;
            })}
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default BestSelling;
