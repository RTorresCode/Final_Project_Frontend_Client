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
    
 }));

  const EditCampusView = (props) => {
  const classes = useStyles(); 
  const {handleChange, handleSubmit, campus} = props;
  

  return (
    <div>
      <h1 style={{margin:'20px', color:'white'}}>Edit Campus</h1>

      <div className={classes.root}>
        <div className={classes.formContainer}>
          <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', padding:'10px',fontSize: '20px'}}>
            {campus.name}
            </Typography>
          </div>
          <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <label style= {{ fontWeight: 'bold'}}>Name: </label>
            <input type="text" name="name" required defaultValue={campus.name} onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style= {{ fontWeight: 'bold'}}>Image URL: </label>
            <input type="text" name="imageUrl" placeholder='(optional)' defaultValue={campus.imageUrl} onChange ={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
            <input type="text" name="address" required defaultValue={campus.address} onChange={(e) => handleChange(e)} />
            <br/>
            <br/>

            <label style={{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
            <textarea
                name="description"
                style={{ margin: 8, width:'300px', height:'75px'}}
                defaultValue={campus.description}
                required
                fullWidth
                margin="normal" 
                onChange={(e) => handleChange(e)}>
            </textarea>
            <br/>
            <Button style={{backgroundColor:'#585858',borderRadius:10,color:'white'}} type="submit">
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

export default EditCampusView;


  