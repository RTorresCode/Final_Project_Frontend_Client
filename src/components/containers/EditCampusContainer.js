import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditCampusView from '../views/EditCampusView';
import { editCampusThunk } from '../../store/thunks';
import { fetchCampusThunk } from "../../store/thunks";
import { editStudentThunk} from "../../store/thunks";


class EditCampusContainer extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      name: "", 
      description: "", 
      address: "",
      imageUrl: null,
      students: null,
      removedStudents: null,
      message: null,
      redirect: false, 
      redirectId: null
    }
  }

  componentDidMount() { //getting campus ID from url
    this.handleInit(this.props.match.params.id);
}

handleInit = async campusId => {
  await this.props.fetchCampus(campusId);
  this.setState({
      name: this.props.campus.name,
      description: this.props.campus.description, 
      address: this.props.campus.address,
      imageUrl: this.props.campus.imageUrl,
      students: this.props.campus.students,
      redirectId: this.props.campus.id
  });
}
 // Capture input data when it is entered
handleChange = event => {
  this.setState({
      [event.target.name]: event.target.value
  });
  console.log("changes have been made");
}
  
    
handleSubmit = async event => {
  event.preventDefault(); 

  let campus = {
    name: this.state.name,
    description: this.state.description,
    address: this.state.address,
    imageUrl: this.state.imageUrl,
    id: this.state.redirectId
  };

  if(this.state.removedStudents) {
    for(let i of this.state.removedStudents) {
      const newStudent = i;
      newStudent.campusId = null;
      this.props.editStudent(newStudent);
    }
  }
  await this.props.editCampus(campus); // Update student in back-end database
        this.setState({  // Update state, and trigger redirect to show the edited campus
          name: '',
          address: '',
          imageUrl: '',
          description: '',
          redirect: true
        });      
    }
    
    handleStudentRemove = async (event, studentId) => {
      event.preventDefault();
      let currStudents = this.state.students;
      let removedStudentArr = this.state.removedStudents ? this.state.removedStudents : [];
      const removedStudent = currStudents.filter(student => student.id === studentId);
      currStudents = currStudents.filter(student => student.id !== studentId);
      removedStudentArr.push(removedStudent[0]);
      this.setState({
        message: "Hit the submit button to save campus changes to database",
        students: currStudents,
        removedStudents: removedStudentArr
      })
    }
  
    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }
    // Render edit campus input form
    render() {
      if(this.state.redirect) {
        return (<Redirect to={`/campuses/${this.state.redirectId}`}/>)
    }
      return (
        <div>
          <Header />
          <EditCampusView campus={this.state}
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          handleStudentRemove={this.handleStudentRemove}
          message={this.state.message}
          />
        </div>
      );
    }
  }
  
  const mapState = (state) => {
    return {
      campus: state.campus,

    };
  };
// The following input argument is passed to the "connect" function used by "EditStudentContainer" component to connect to Redux Store.
// The "mapDispatch" argument is used to dispatch Action (Redux Thunk) to Redux Store.
// The "mapDispatch" calls the specific Thunk to dispatch its action. The "dispatch" is a function of Redux Store.
const mapDispatch = (dispatch) => {
  return({
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
      editStudent: (student) => dispatch(editStudentThunk(student))
  })
}

// Export store-connected container by default
// EditStudentContainer uses "connect" function to connect to Redux Store and to read values from the Store 
// (and re-read the values when the Store State updates).

  export default connect(mapState, mapDispatch)(EditCampusContainer);
       






        