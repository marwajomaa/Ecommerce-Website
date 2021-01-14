import React, { useContext, useState } from "react";
import { Grid, Typography } from "@material-ui/core";
import { GlobalState } from "../../GlobalState";
import Select from "../../components/Select";

function Filters() {
  const state = useContext(GlobalState);
  const [categories] = state.categoryAPI.categories;

  const [category, setCategory] = state.productsAPI.category;
  const [sort, setSort] = state.productsAPI.sort;
  const [search, setSearch] = state.productsAPI.search;
  const [isAdmin] = state.userAPI.isAdmin;

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <Grid container xs={12}>
      {isAdmin && (
        <>
          <Typography variant="h6" component="span">
            Filters:
          </Typography>
          <Grid item xs={12}>
            <Select
              name="category"
              value={category}
              onChange={handleInputChange}
              options={categories && categories}
              allProducts
            />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default Filters;
