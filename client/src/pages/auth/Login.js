import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../hooks/useForm";

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
  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("email" in fieldValues)
      temp.email = /$^|.+@.+..+/.test(fieldValues.email)
        ? ""
        : "Email is not valid.";
    if ("password" in fieldValues)
      temp.password =
        fieldValues.password.length >= 6
          ? ""
          : "Password should be at least 6 characters";
    setErrors({
      ...temp,
    });

    if (fieldValues === values)
      return Object.values(temp).every((x) => x === "");
  };
  const { values, handleInputChange, clearInputs, errors, setErrors } = useForm(
    initialValues,
    true,
    validate
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (!validate()) {
      window.alert("form is not valid");
    }
    clearInputs();
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
                  error={errors.email}
                />
              </Grid>
              <Grid item xs={12} ms={12}>
                <Input
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleInputChange}
                  error={errors.password}
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
