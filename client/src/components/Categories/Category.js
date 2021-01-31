import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import headPhoneImg from "../../assets/headPhone.jpg";
import labtopImg from "../../assets/img.jpg";
import hatsImg from "../../assets/hats.jpg";
import shoes from "../../assets/shoes.jpg";

const CategoryBox = styled("div")`
  box-shadow: 0 0 5px;
  position: relative;
  overflow: hidden;
  height: 300px;
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
  const [img, setImage] = useState("");

  useEffect(() => {
    const setImg = () => {
      if (category.name === "headphones") {
        setImage(headPhoneImg);
      } else if (category.name === "labtops") setImage(labtopImg);
      else if (category.name === "hats") setImage(hatsImg);
      else if (category.name === "shoes") setImage(shoes);
    };
    setImg();
  }, []);

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
