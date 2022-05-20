import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';
import { fetchStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk } from "../../store/thunks";


class EditStudentContainer extends Component {
  // componentDidMount() {
    
  //   this.props.fetchStudent(this.props.match.params.id);
  //   this.props.fetchAllCampuses();
  // }

  constructor(props){
    super(props);

    this.state = {
      firstname: "", 
      lastname: "", 
      campusId: null,
      email: "",
      imageUrl: null,
      gpa: null,
      redirect: false, 
      redirectId: null,
      errorMsg: null
    };
  }

  componentDidMount() {
    //getting student ID from url
    this.props.fetchAllCampuses();
    this.handleInit(this.props.match.params.id);
  }

  handleInit = async studentId => {
    await this.props.fetchStudent(studentId);
    this.setState({
        firstname: this.props.student.firstname,
        lastname: this.props.student.lastname, 
        campusId: this.props.student.campusId,
        email: this.props.student.email,
        imageUrl: this.props.student.imageUrl,
        gpa: this.props.student.gpa,
        redirectId: this.props.student.id
    });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    let contSubmit = false;
    let formCampusId = this.state.campusId;


    if(!formCampusId) {
        contSubmit = true;
        formCampusId = null;
    }

    if(!contSubmit) {
        for(let i of this.props.allCampuses) {
            if(i.id === this.state.campusId) {
                contSubmit = true;
                break;
            }
        }
    }
    if(!contSubmit) {
        this.setState({
            errorMsg: "Invalid Campus ID!"
        });
    }
    else {
        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: formCampusId,
            email: this.state.email,
            imageUrl: this.state.imageUrl,
            gpa: this.state.gpa,
            id: this.state.redirectId
        };
      
      // Update student in back-end database
      await this.props.editStudent(student);
      // Update state, and trigger redirect to updated student
      this.setState({
        firstname: '', 
        lastname: '', 
        campusId: null, 
        email: '',
        redirect: true
      });
    }
  }

  componentWillUnmount() {
    this.setState({redirect: false, redirectId: null});
  }


  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/students/${this.state.redirectId}`}/>)   
    }

    return (
      <div>
        <Header />
        <EditStudentView student={this.state} 
        handleChange = {this.handleChange} 
        handleSubmit={this.handleSubmit}
        errorMsg={this.state.errorMsg}
        />
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,  
  };
};
    
const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

export default connect(mapState, mapDispatch)(EditStudentContainer);    