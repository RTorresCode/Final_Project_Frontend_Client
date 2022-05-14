import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
      textAlign: "left",
      fontType: "bold",
      fontFamily: "Georgia, serif",
      fontSize: "35px",
      color: "#9ebe35",
    },
    appBar: {
      backgroundColor: "#11153e",
      shadows: ["none"],
    },
    greeting: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "#f6f6f6",
      fontFamily: "Georgia, serif",
      width: "50%",
      margin: "auto",
    },
    links: {
      textDecoration: "none",
    },
    formContainer: {
      width: "500px",
      backgroundColor: "#f0f0f5",
      borderRadius: "5px",
      margin: "auto",
    },
    
    customizeAppBar: {
      backgroundColor: "#11153e",
      shadows: ["none"],
    },
    formTitle: {
      backgroundColor: "#c5c8d6",
      marginBottom: "15px",
      textAlign: "center",
      borderRadius: "5px 5px 0px 0px",
      padding: "3px",
    },
  }));

  