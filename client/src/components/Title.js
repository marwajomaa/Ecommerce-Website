import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    flex: 2,
    padding: "0 15px",
  },
  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#eee",
  },
}));

function Title({ text, variant = "p", component = "p", ...props }) {
  const classes = useStyles();
  return (
    <Typography className={classes.root}>
      <Typography className={classes.line} />
      <Typography
        variant={variant}
        component={component}
        {...props}
        className={classes.title}
      >
        {text}
      </Typography>
      <Typography className={classes.line} />
    </Typography>
  );
}

export default Title;
