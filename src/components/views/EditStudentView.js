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
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
},
title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
}, 
customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
},

}));

  const EditStudentView = (props) => {
    // console.log(props)
    const { handleChange, handleSubmit, student } = props;
    const classes = useStyles();
  
    return (
      <div style={{position: 'relative', top: '58px', width: '100vw'}}>
      <h1 style={{color: '#63229A'}}>{student.firstname + " " + student.lastname}</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '25px', color: 'white'}}>
              Edit Student
            </Typography>
          </div>  
      

export default EditStudentView;



      
      
      
      
 