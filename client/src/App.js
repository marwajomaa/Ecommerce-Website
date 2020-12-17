import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, Paper, makeStyles } from "@material-ui/core";
import { DataProvider } from "./GlobalState";
import Header from "./components/Header";
import Pages from "./pages";

const useStyle = makeStyles((theme) => ({
  root: {
    // boxSizing: "border-box",
    // minHeight: "100vh",
    // margin: "0 auto",
    // padding: "0 20px",
  },
  main: {
    marginTop: "100px",
    minHeight: "100vh",
    width: "100%",
  },
}));

function App() {
  const classes = useStyle();
  return (
    <DataProvider>
      <Router>
        <CssBaseline />
        <Paper elevation={1}>
          <Header />
          <Pages style={classes.main} />
        </Paper>
      </Router>
    </DataProvider>
  );
}

export default App;
