import React, { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { makeStyles, Checkbox } from "@material-ui/core";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import CardMedia from "./CardMedia";
import Button from "../Button";
import { GlobalState } from "../../GlobalState";
import headPhoneImg from "../../assets/headPhone.jpg";
import labtopImg from "../../assets/img.jpg";
import hatsImg from "../../assets/hat.jpg";
import shoes from "../../assets/shoes.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    margin: "0 auto",
    padding: "10px",
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({ product, handleCheck }) {
  const globalState = useContext(GlobalState);
  const [isLoggedIn] = globalState.token;
  const addToCart = globalState.userAPI.addToCart;
  const [isAdmin] = globalState.userAPI.isAdmin;
  const [alert] = globalState.userAPI.alert;
  const { deleteProduct } = globalState.productsAPI;
  const { category, content, price, _id, checked } = product;
  const [img, setImage] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const setImg = () => {
      if (product.category === "headphones") {
        setImage(headPhoneImg);
      } else if (product.category === "labtops") setImage(labtopImg);
      else if (product.category === "hats") setImage(hatsImg);
      else if (product.category === "shoes") setImage(shoes);
      else setImage(null);
    };
    setImg();
  }, []);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        {isAdmin && (
          <Checkbox checked={checked} onChange={() => handleCheck(_id)} />
        )}
        <CardMedia img={img} className={classes.media} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {category}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="secondary"
            component="span"
          >
            ${price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {isAdmin ? (
          <>
            <Button
              color="primary"
              style={{ width: "50%" }}
              text="Edit"
              href={`/edit_product/${_id}`}
            />
            <Button
              color="secondary"
              variant="contained"
              style={{ width: "50%" }}
              text="Delete"
              onClick={() => deleteProduct(_id)}
            />
          </>
        ) : (
          <>
            <Button
              color="secondary"
              style={{ width: "50%" }}
              text="Add To Cart"
              href={isLoggedIn ? "#" : "/signup"}
              onClick={() => addToCart(product)}
            />
            <Button
              style={{ width: "50%" }}
              text="View"
              href={`/product/detail/${_id}/?cat=${category}`}
            />
          </>
        )}
      </CardActions>
    </Card>
  );
}
