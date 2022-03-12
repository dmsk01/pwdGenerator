import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GenerationForm from "./components/GenerationForm/GenerationForm";
import "./App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <GenerationForm />
      </div>
    </div>
  );
}

export default App;
