import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
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

  const EditCampusView = (props) => {
  const classes = useStyles(); 
  const {handleChange, handleSubmit, campus} = props;
  

    return (
      <div>
        <br />
        <div className={classes.formTitle}>
            <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
              Edit {campus.name}
            </Typography>
        </div>
        {}  
        <form onSubmit={(e) => handleSubmit(e)}>
        <label style= {{color:'#11153e', fontWeight: 'bold'}}>Name: </label>
          <input 
          type="text" 
          name="name"
          placeholder='School Name' 
          defaultValue={campus.name} 
          onChange={(e) => handleChange(e)} 
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Address: </label>
          <input 
          type="text" 
          name="address"
          placeholder='School Address'
          defaultValue={campus.address}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Description: </label>
          <input 
          type="text" 
          name="description"
          placeholder="Description"
          defaultValue={campus.description}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>Image: </label>
          <input 
          type="text" 
          name="imageUrl"
          placeholder='Profile Picture'
          defaultValue={campus.imageUrl}
          onChange={(e) => handleChange(e)}  
          />
          <br/>
          <br />
          <Button variant="contained" color="primary" type="submit">
            Save Campus Edit
          </Button>
        </form>
    </div>
  )
}

export default EditCampusView;
  