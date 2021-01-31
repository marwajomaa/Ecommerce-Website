import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import { GlobalState } from "../../../GlobalState";
import Button from "../../../components/Button";
import Tooltip from "../../../components/ToolTip";
import headPhoneImg from "../../../assets/headPhone.jpg";
import labtopImg from "../../../assets/img.jpg";
import hatsImg from "../../../assets/hat.jpg";
import shoes from "../../../assets/shoes.jpg";
import "./style.css";

function FeaturedProductsBox({ product }) {
  const globalState = useContext(GlobalState);
  const [isLoggedIn] = globalState.token;
  const addToCart = globalState.userAPI.addToCart;

  const [img, setImage] = useState("");

  useEffect(() => {
    const setImg = () => {
      if (product.category === "headphones") {
        setImage(headPhoneImg);
      } else if (product.category === "labtops") setImage(labtopImg);
      else if (product.category === "hats") setImage(hatsImg);
      else if (product.category === "shoes") setImage(shoes);
    };
    setImg();
  }, []);
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Link
        to={`/product/detail/${product._id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="featured__container">
          <img src={img} alt="Avatar" className="featured__image" />
          <div className="featured__title">
            <h3>{product.title}</h3>
            <h3>${product.price}</h3>
          </div>
          <div className="featured__overlay">
            <div className="featured__text">
              <Button
                text="Add to Cart"
                href={isLoggedIn ? "#" : "/signup"}
                color="secondary"
                onClick={() => addToCart(product)}
              />
            </div>
            <div className="featured__icons">
              <Link
                to={`/product/detail/${product._id}`}
                className="featured__link"
              >
                <Tooltip title="View">
                  <VisibilityIcon style={{ color: "inherit" }} />
                </Tooltip>
              </Link>
              <Link to="#" className="featured__link">
                <Tooltip title="Add To wishlist">
                  <FavoriteBorderIcon style={{ color: "inherit" }} />
                </Tooltip>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </Grid>
  );
}

export default FeaturedProductsBox;
