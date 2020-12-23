import React, { useContext } from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { GlobalState } from "../../GlobalState";
import img from "../../assets/img.jpg";
import Button from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "30px 10px",
    margin: "20px auto",
    fontSize: "15%",
  },
  boxDetails: {
    maxWidth: "400px",
    margin: "0 auto",
    paddingLeft: "20px",
    width: "100%",
  },
  title: {
    color: "darkblue",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  Typography: {
    lineHeight: "1.5",
    margin: "15px 0",
    opacity: ".8",
  },
}));

function Cart() {
  const globalState = useContext(GlobalState);
  const [isLoggedIn] = globalState.token;
  const [cart, setCart] = globalState.userAPI.cart;
  const [isAdmin] = globalState.userAPI.isAdmin;
  const classes = useStyles();

  if (cart.length === 0) {
    return (
      <Typography variant="h3" component="p" style={{ textAlign: "center" }}>
        Cart is empty
      </Typography>
    );
  }

  return (
    <Paper elevation={0}>
      {cart.map(({ title, price, description, quantity, content }) => {
        return (
          <Grid container xs={12} spacing={3} className={classes.root}>
            <Grid item xs={12} sm={6}>
              <img src={img} alt="img" style={{ width: "100%" }} />
            </Grid>
            <Grid item xs={12} sm={6} className={classes.boxDetails}>
              <Typography variant="h3" component="h3" gutterBottom={2}>
                {title}
              </Typography>
              <Typography variant="h4" component="p" gutterBottom={1}>
                ${price * quantity}
              </Typography>
              <Typography variant="h4" component="p" gutterBottom={1}>
                {description}
              </Typography>
              <Typography variant="h5" component="p" gutterBottom={2}>
                {content}
              </Typography>
              <Grid item spacing={1} gutterBottom={2}>
                <Button text="-" />
                <Typography
                  variant="h4"
                  component="span"
                  style={{ textAlign: "center", padding: "20px 15px" }}
                >
                  {quantity}
                </Typography>
                <Button text="+" style={{ margin: "20px" }} />
              </Grid>
              <Button
                text="Delete"
                color="secondary"
                style={{ width: "120px", margin: "0 20px" }}
              />
            </Grid>
          </Grid>
        );
      })}
      <Grid item>
        <Typography variant="h3" component="p">
          Total: $
        </Typography>
        <Button href="/cart" text="Payment" />
      </Grid>
    </Paper>
  );
}

export default Cart;
