/*==================================================
HomePageView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the home page.
================================================== */
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Georgia, serif",
    fontSize: "80px",
    color: "#66FCFf",
  },
  appBar: {
    backgroundColor: "#1F2833",
    shadows: ["none"],
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#0b0c10",
    fontFamily: "Georgia, serif",
    width: "100%%",
    marginTop: "100px",
    color: "white",
  },
  links: {
    textDecoration: "none",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="#9ebe35">
            Campus Manager
          </Typography>
          <Link className={classes.links} to={"/campuses"}>
            <Button
              variant="contained"
              color="white"
              style={{ marginRight: "10px", height: "60px", width: "200px" }}
            >
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button
              variant="contained"
              color="white"
              style={{ height: "60px", width: "200px" }}
            >
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <center>
        <div className={classes.greeting}>
          <img
            src="https://media.istockphoto.com/vectors/young-people-group-reading-books-study-learning-knowledge-and-vector-vector-id1206750602?k=20&m=1206750602&s=612x612&w=0&h=nOBI0vsqpURdDZ1dmcn9bys2Z_5gaIuAl1pfFujZiMk="
            alt="pic"
            style={{
              marginTop: "20px",
              marginRight: "10px",
              height: "auto",
              width: "400px",
            }}
          />
          <h1>
            Welcome to our campus management system! You can add your college campus with its
            respective students here. Click on the buttons to get started.
          </h1>
          <img
            src="https://media.istockphoto.com/vectors/young-people-group-reading-books-study-learning-knowledge-and-vector-vector-id1206750602?k=20&m=1206750602&s=612x612&w=0&h=nOBI0vsqpURdDZ1dmcn9bys2Z_5gaIuAl1pfFujZiMk="
            alt="pic"
            style={{
              marginTop: "20px",
              marginRight: "10px",
              height: "auto",
              width: "400px",
            }}
          />
        </div>
      </center>
    </div>
  );
};

export default HomePageView;