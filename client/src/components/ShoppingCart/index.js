import React from "react";
import { Badge, IconButton, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const useStyles = makeStyles(() => ({
  Cart: {
    "@media (max-width: 900px)": {
      alignItems: "center",
      alignSelf: "center",
    },
  },
}));

const { Cart } = useStyles;

export const ShoppingCart = () => {
  return (
    <div className={Cart}>
      <IconButton>
        <Badge badgeContent={5} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </div>
  );
};
