import React, { useContext } from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import { GlobalState } from "../../GlobalState";
import Title from "../Title";
import Category from "./Category";

const useStyles = makeStyles(() => ({
  root: {
    padding: "3rem 0",
    position: "relative",
  },
  categoryContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

function Categories() {
  const state = useContext(GlobalState);
  const [categories] = state.categoryAPI.categories;
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Title text="BROWSE OUR CATEGORIES" />
      <Grid container xs={12} className={classes.categoryContainer} spacing={3}>
        {categories.map((category) => {
          return <Category category={category} />;
        })}
      </Grid>
    </Grid>
  );
}

export default Categories;
