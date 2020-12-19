import React, { useState, useEffect } from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "0 auto",
    justifyContent: "center",
    minHeight: "80vh",
    alignItems: "center",
  },
  Typography: {
    textAlign: "center",
    fontSize: "32px",
    fontWeight: "bold",
  },
}));

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const { container, Typography } = useStyles();
  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        spacing={0}
        justify="center"
        direction="row"
        xs={12}
        className={container}
      >
        <Grid item xs={12} className={Typography}>
          <Typography component="h1" variant="h1">
            Sign in
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <form>
            <Grid container direction="column" spacing={2}>
              <Grid item xs={12}>
                <Input
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{ width: "100%" }}
                  color="secondary"
                  type="submit"
                  text="Login"
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            Forgot Password?
          </Link>
        </Grid>
      </Grid>
    </form>
  );
}

export default Login;
