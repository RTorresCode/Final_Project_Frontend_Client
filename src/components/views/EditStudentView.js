import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles( () => ({
  formTitle:{
    backgroundColor:'#c5c8d5',
    marginBottom: '15px',
    marginLeft: '28%',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px',
    width: '40%', 
  },
}));











  const EditStudentView = (props) => {
    // console.log(props)
    const { handleChange, handleSubmit } = props;
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title} color="#9ebe35">
              Campus Manager
            </Typography>
  
            <Link className={classes.links} to={"/"}>
              <Button
                variant="contained"
                color="white"
                style={{ marginRight: "10px", height: "60px", width: "200px" }}
              >
                Home
              </Button>
            </Link>
  
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
                style={{ marginRight: "10px", height: "60px", width: "200px" }}
              >
                All Students
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
  
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography
              style={{
                fontWeight: "bold",
                fontFamily: "Courier, sans-serif",
                fontSize: "20px",
                color: "#11153e",
              }}
            >
              Edit Student
            </Typography>
          </div>
          <form style={{ textAlign: "center" }} onSubmit={(e) => handleSubmit(e)}>
            <label style={{ color: "#11153e", fontWeight: "bold" }}>
              First Name:{" "}
            </label>
            <input
              type="text"
              name="firstname"
              onChange={(e) => handleChange(e)}
              defaultValue={props.student.firstname}
              required
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}>
              Last Name:{" "}
            </label>
            <input
              type="text"
              name="lastname"
              onChange={(e) => handleChange(e)}
              defaultValue={props.student.lastname}
              required
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}>
              campusId:{" "}
            </label>
            <input
              type="text"
              name="campusId"
              onChange={(e) => handleChange(e)}
              defaultValue={props.student.campusId}
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}>
              Email:{" "}
            </label>
            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
              defaultValue={props.student.email}
              required
            />
            <br />
            <br />
  
            <label style={{ color: "#11153e", fontWeight: "bold" }}>GPA: </label>
            <input
              type="double"
              name="gpa"
              onChange={(e) => handleChange(e)}
              defaultValue={props.student.gpa}
              required
            />
            <br />
            <br />
  
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br />
            <br />
          </form>
        </div>
      </div>
    );
  };
  
  export default EditStudentView;