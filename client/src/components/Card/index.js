import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActionArea,
} from "@material-ui/core";
import img from "../../assets/img.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "0 auto",
  },
  media: {
    height: 200,
  },
});

export default function MediaCard({ product }) {
  const {
    category,
    checked,
    content,
    description,
    price,
    title,
    sold,
  } = product;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="product image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {category}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant="contained" size="large" color="secondary">
          Buy
        </Button>
        <Button variant="contained" size="large" color="default">
          View
        </Button>
      </CardActions>
    </Card>
  );
}
