
import { Component } from 'react';
import { connect } from 'react-redux';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';



class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: "", 
          lastname: "",
          gpa: -1,
          email: "",
          imageUrl: "",
          id: -1,
          campusId: -1, 
          redirect: false, 
          errorCaught: false, 
          redirectId: null
        };
    }

    componentDidMount() {
      this.setState({firstname: this.props.student.firstname,
          lastname: this.props.student.lastname, 
          gpa: this.props.student.gpa,
          email: this.props.student.email,
          imageUrl: this.props.student.imageUrl,
          campusId: this.props.student.campusId,
          id: this.props.student.id});  
    }

    handleChange = event => {
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit = async event =>  {
      event.preventDefault(); 
  
      let new_info = { 
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        gpa: this.state.gpa,
        email: this.state.email,
        imageUrl: this.state.imageUrl,
        campusId: this.state.campusId,
        id: this.state.id
      };
      if (new_info.imageUrl !== "") { 
      }
  
      
        try {
          let student = await this.props.editStudent(new_info) 
          console.log(student.id); 
          alert(`${new_info.firstname} ${new_info.lastname}'s edit was saved.`); 
      
          this.setState({
            firstname: "", 
            lastname: "",
            gpa: -1,
            email: "",
            imageUrl: "",
            id: -1,
            campusId: -1,
            redirect: true, 
          });
        }
        catch(err) { 
          console.error(err); 
          alert("Error with edit!");
          this.setState({
            errorCaught: true 
          });
        };
    }
    
    componentWillUnmount() {
      this.setState({redirect: false, redirectId: null});
    }
    
    render() {
      if(this.state.redirect) {
        window.location.reload(); 
      }
  
     return (
        <div>
          <EditStudentView
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}
            student={this.props.student}
          />
          {this.state.errorCaught ? (
            <div>
              <br />
              <p>Student First and Last names: Cannot be null.</p>
              <p>Student's Campus ID: Must be a valid  and actual campus ID of a school within this database.</p>
              <p>Student Email: Cannot be null.</p>
              <p>Student Image: Can be left blank.</p>
              <p>Student GPA: Must be between 0.0 and 4.0.</p>
            </div>
          ) : (
            null
          )}
        </div>          
      );
    }
  }
  
 const mapDispatch = (dispatch) => {
      return({
          editStudent: (student) => dispatch(editStudentThunk(student)),
      })
  }
  
  export default connect(null, mapDispatch)(EditStudentContainer);











  