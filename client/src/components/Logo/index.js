import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "red",
    textAlign: "left",
  },
}));

const { logo } = useStyles;

export const Logo = (
  <Typography variant="h6" component="h1" className={logo}>
    Shopify
  </Typography>
);
