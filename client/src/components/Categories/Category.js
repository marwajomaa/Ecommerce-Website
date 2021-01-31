import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import headPhoneImg from "../../assets/headPhone.jpg";
import labtopImg from "../../assets/img.jpg";
import hatsImg from "../../assets/hats.jpg";
import shoes from "../../assets/shoes.jpg";
import "./style.css";

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
        <div className="categoryBox">
          <img
            src={img}
            alt="img"
            style={{ width: "100%", height: "100%", display: "block" }}
          />
          <button className="categoryBtn">{category.name}</button>
        </div>
      </Link>
    </Grid>
  );
}

export default Category;
