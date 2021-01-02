import React, { useContext } from "react";
import { Paper, Grid, Typography, makeStyles } from "@material-ui/core";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../hooks/useForm";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    maxWidth: "400px",
    margin: "1rem auto",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
}));

const initialValues = {
  product_id: "",
  tittle: "",
  price: 0,
  description: "",
  content: "",
  category: "",
};

function CreateProduct() {
  const { values, handleInputChange, clearInputs } = useForm(
    initialValues,
    false
  );
  const classes = useStyles();

  const handleSubmit = () => {
    e.preventDefault();
  };
  return (
    <Paper elevation={0}>
      <form className={classes.container} onSubmit={handleSubmit}>
        <Typography variant="h6" component="p">
          Create New Product
        </Typography>
        <Input
          label="Title"
          type="text"
          name="title"
          value={values.title}
          onChange={handleInputChange}
        />
        <Input
          label="Price"
          type="number"
          name="price"
          value={values.price}
          onChange={handleInputChange}
        />
        <Input
          label="Description"
          type="text"
          name="description"
          value={values.description}
          onChange={handleInputChange}
        />
        <Input
          label="Content"
          type="text"
          name="content"
          value={values.content}
          onChange={handleInputChange}
        />
        <Input
          label="Category"
          type="text"
          name="category"
          value={values.category}
          onChange={handleInputChange}
        />
        <Button
          variant="contained"
          color="primary"
          text="Submit"
          style={{ width: "100%" }}
        />
      </form>
    </Paper>
  );
}

export default CreateProduct;
