import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  formTitle:{
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
    formContainer:{  
      width: '500px',
      backgroundColor: '#f0f0f5',
      borderRadius: '5px',
      margin: 'auto',
    },
    
 }));

  const EditCampusView = (props) => {
  const classes = useStyles(); 
  const {campus, handleChange, handleSubmit, handleStudentRemove} = props;
  

  return (
    <div>
      <h1 style={{margin:'20px', color:'white'}}>Edit Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', padding:'10px',fontSize: '20px'}}>
            Edit Campus
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
            <input required type="text" name="name" value={campus.name} onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <input required type="text" name="description" value={campus.description} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
            <input required type="text" name="address" value={campus.address} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Pic URL: </label>
            <input type="text" name="imageUrl" value={campus.imageUrl ? campus.imageUrl : ""} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            {!campus.students && <h3>No Students Enrolled</h3>}
            {campus.students && campus.students.map( student => {
              let name = student.firstname + " " + student.lastname;
              return (
                <div key={student.id}>
                    <h2>{name}</h2>
                    <button onClick={(e) => handleStudentRemove(e, student.id)}>Remove from campus</button>        
                </div>
              );
            })}

            <br/>
            <br/>
            
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
            <br/>
            <br/>
            {props.message && <p>{props.message}</p>}
            <br/>
            <br/>
          </form>
          </div>
      </div>
    </div>    
  )
}

export default EditCampusView;