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
    const { handleChange, handleSubmit, student } = props;
    const classes = useStyles();
  
    return (
      <div>
        <br />
        <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Edit {student.firstname} {student.lastname}
            </Typography>
        </div>
        {}  
        <form onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input 
          type="text" 
          name="firstname"
          placeholder='Student First Name' 
          defaultValue={student.firstname} 
          onChange={(e) => handleChange(e)} 
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input 
          type="text" 
          name="lastname"
          placeholder="Student's Last Name"
          defaultValue={student.lastname}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input 
          type="text" 
          name="email"
          placeholder="Email"
          defaultValue={student.email}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input 
          type="text" 
          name="gpa"
          placeholder="GPA"
          defaultValue={student.gpa}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Image: </label>
          <input 
          type="text" 
          name="imageUrl"
          placeholder='Profile Picture'
          defaultValue={student.imageUrl}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus ID: </label>
          <input 
          type="text" 
          name="campusId"
          placeholder="ID of Student's School"
          defaultValue={student.campusId}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Save Student Edit
          </Button>
        </form>
    </div>
  )
}

export default EditStudentView;



      
      
      
      
 