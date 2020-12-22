import React, { useContext } from "react";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { GlobalState } from "../../GlobalState";

export const useStyles = makeStyles(() => ({
  Cart: {
    "@media (min-width: 900px)": {
      marginLeft: "20px",
    },
  },
}));

const { Cart } = useStyles;

export const ShoppingCart = () => {
  const globalState = useContext(GlobalState);
  const [isLoggedIn] = globalState.token;
  const [isAdmin] = globalState.userAPI.isAdmin;
  return (
    <>
      <IconButton>
        {isLoggedIn && !isAdmin ? (
          <Badge badgeContent={5} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        ) : (
          <Badge badgeContent={0} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        )}
      </IconButton>
    </>
  );
};
