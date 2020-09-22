import { fade, InputBase, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { Card, Grid, Segment } from "semantic-ui-react";
import ProjectCards from "./ProjectCards";
import SearchIcon from "@material-ui/icons/Search";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
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
      width: "20ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ProjectDashboard() {
  const [filter, setFilter] = useState(null);
  const { projects } = useSelector((state) => state.project);

  const classes = useStyles();
  return (
    <Grid>
      <Grid.Column width={12}>
        <Card.Group itemsPerRow={1}>
          {projects.map((project) => (
            <ProjectCards key={project.id} project={project} />
          ))}
        </Card.Group>
      </Grid.Column>
      <Grid.Column>
        <Segment style={{ minWidth: 300, position: "sticky", top: 75 }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search Project...'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              style={{ width: "300px" }}
              inputProps={{ "aria-label": "search" }}
              onChange={(event) => {
                setFilter(event.target.filter);
              }}
            />
          </div>
        </Segment>
      </Grid.Column>
    </Grid>
  );
}
