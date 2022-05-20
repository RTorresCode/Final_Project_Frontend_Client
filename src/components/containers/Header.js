/*==================================================
Header.js

It contains the Header component to be displayed on every page.
The header contains navigation links to every other page.
================================================== */
// Import "material" library for building UI with React components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// Define styling for the header
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        textAlign: "left",
        fontType: "bold",
        fontFamily: "Georgia, serif",
        fontSize: "80px",
        color: "#66FCF1",
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

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="white" style={{marginRight: '10px', height: '60px', width: '200px'}}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="white" style={{marginRight: '10px', height: '60px', width: '200px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="white" style={{height: '60px', width: '200px'}}>
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );    
}

export default Header;
