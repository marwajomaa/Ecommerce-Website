import React from "react";
import { CardMedia, Card, CardActionArea } from "@material-ui/core";

function CardMed({ img, title = "product image", ...props }) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia image={img} title={title} {...props} />
      </CardActionArea>
    </Card>
  );
}

export default CardMed;
