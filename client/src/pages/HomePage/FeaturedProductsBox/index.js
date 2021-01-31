import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { GlobalState } from "../../../GlobalState";
import Button from "../../../components/Button";
import img from "../../../assets/img1.jpg";
import "./style.css";

function FeaturedProductsBox({ product }) {
  const globalState = useContext(GlobalState);
  const [isLoggedIn] = globalState.token;
  const addToCart = globalState.userAPI.addToCart;
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
          </div>
        </div>
      </Link>
    </Grid>
  );
}

export default FeaturedProductsBox;
