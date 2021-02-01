import React from "react";
import { Link } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import img from "../../assets/logo.png";

export const Logo = (
  <>
    <Link to="/">
      <img src={img} alt="logo" />
    </Link>
  </>
);
