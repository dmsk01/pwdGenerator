import React from "react";
import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Person from "../Person/Person";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import Button from "@material-ui/core/Button";
//import CancelOutlinedIcon from "@material-ui/icons/CancelOutlined";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": { margin: theme.spacing(1) },
    display: "flex",
    flexDirection: "column",
  },
  personContainer: {
    display: "flex",
    alignItems: "center",
  },
  cancelOutlinedIcon: {
    marginBottom: "-17px",
  },
  addPersonIcon: {
    fontSize: 40,
    cursor: "pointer",
    "&:hover": {
      color: "green",
      transition: "all 0.7s",
      transform: "scale(1.1)",
    },
  },
  formFooter: { display: "flex", padding: "0 10px", maxWidth: "440px", alignItems: "center", justifyContent: "space-between" },
}));

function PersonList() {
  const [personsList, setPersonsList] = useState({});
  const [person, setPerson] = useState({});
  const classes = useStyles();

  const handleAddPerson = () => {
    //To add one peson in list obj to map through it
    const key = Date.now();
    // setPersonsList((prevState) => {
    //   return { ...prevState, [key]: { rank: "", fullname: "" } };
    // });

    console.log("add person", personsList);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("generate plan");
  };

  const handlePersonChange = (person) => {
    setPerson(person);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className={classes.root}>
        <div className={classes.personContainer}>
          {Object.entries(personsList).map((person) => (
            <Person key={Date.now()} rank={person.rank} fullname={person.fullname} onChange={handlePersonChange} />
          ))}
          {/* <CancelOutlinedIcon className={classes.cancelOutlinedIcon} /> */}
        </div>
        <div className={classes.formFooter}>
          <PersonAddIcon onClick={handleAddPerson} className={classes.addPersonIcon} />
          <Button type="submit" variant="contained" color="primary">
            Generate schedule
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PersonList;
