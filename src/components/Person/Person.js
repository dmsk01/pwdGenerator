import React from "react";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const ranks = ["engineer", "electrician", "steelmaker", "repairman", "operator", "shiftman"];

function Person({ onChange }) {
  const classes = useStyles();

  const [person, setPerson] = useState({ rank: "", fullname: "" });

  useEffect(() => {
    handleChange();
  }, [person]);

  const handleInput = (event) => {
    const { name, value } = event.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChange = () => {
    onChange && onChange(person);
  };

  return (
    <div className={classes.root} noValidate autoComplete="off">
      <FormControl className={classes.formControl}>
        <InputLabel id="rank-select-label">Rank</InputLabel>
        <Select labelId="rank-select-label" name="rank" id="rank" value={person.rank} onChange={handleInput}>
          {ranks.map((rank) => (
            <MenuItem key={rank} value={rank}>
              {rank}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField className={classes.fullname} name="fullname" id="fullname" label="Full Name" value={person.fullname} onChange={handleInput} />
    </div>
  );
}

export default Person;
