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
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
            <input placeholder={student.firstname} type="text" name="firstname" onChange ={(e) => handleChange(e)} />
            
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
            <input placeholder={student.lastname} type="text" name="lastname" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Campus Id: </label>
            <input placeholder={student.campusId} type="number" min={1.0} name="campusId" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Image Url: </label>
            <input placeholder={student.imageURL} type="text" name="imageURL" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
            <input placeholder={student.email} type="email" name="email" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
            <input placeholder={student.gpa} type="number" step="0.01" min={0.0} max={4.0} name="gpa" onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  ) 
}     

export default EditStudentView;



      
      
      
      
 