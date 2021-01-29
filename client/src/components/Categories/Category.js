import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import img from "../../assets/img.jpg";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

const CategoryBox = styled("div")`
  box-shadow: 0 0 5px;
  position: relative;
  overflow: hidden;
`;

const CategoryBtn = styled("button")`
  position: absolute;
  bottom: -10%;
  left: 5%;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #fff;
  opacity: 1;
  transition: all 0.3s linear;
  &:hover {
    bottom: 5%;
    opacity: 1;
  }
`;

function Category({ category }) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link to={`/category/${category.name}`}>
        <CategoryBox>
          <img
            src={img}
            alt="img"
            style={{ width: "100%", display: "block" }}
          />
          <CategoryBtn text={category.name} />
        </CategoryBox>
      </Link>
    </Grid>
  );
}

export default Category;
