import {
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { buttonData } from "../../app/api/buttonData";
import { categoryData } from "../../app/api/categoryOptions";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: 100,
  },
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [cat, setCat] = React.useState("");
  const [op, setOp] = React.useState(false);

  const handleCat = (event) => {
    setCat(event.target.value);
  };

  const handleCl = () => {
    setOp(false);
  };

  const handleOp = () => {
    setOp(true);
  };

  return (
    <div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder='Search name…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          style={{ width: "300px" }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <FormControl className={classes.formControl}>
        <div className={classes.inputs}>
          <InputLabel id='project-label'>Project</InputLabel>
          <Select
            open={open}
            labelId='project-label'
            id='project-select'
            onClose={handleClose}
            onOpen={handleOpen}
            value={age}
            onChange={handleChange}
            style={{ width: "120px" }}
          >
            {buttonData.map((data) => (
              <MenuItem value={data.value}>{data.value}</MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
      <FormControl className={classes.formControl}>
        <div className={classes.inputs}>
          <InputLabel id='spec-label'>Specialization</InputLabel>
          <Select
            labelId='spec-label'
            id='spec-select'
            open={op}
            onClose={handleCl}
            onOpen={handleOp}
            value={cat}
            onChange={handleCat}
            style={{ width: "150px" }}
          >
            {categoryData.map((data) => (
              <MenuItem value={data.value}>{data.value}</MenuItem>
            ))}
          </Select>
        </div>
      </FormControl>
    </div>
  );
}
