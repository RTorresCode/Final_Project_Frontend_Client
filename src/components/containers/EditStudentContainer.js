import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';
import { fetchStudentThunk } from "../../store/thunks";
import { fetchAllCampusesThunk } from "../../store/thunks";


class EditStudentContainer extends Component {
  componentDidMount() {
    
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  constructor(props){
    super(props);
    
    let student = this.props.student

    this.state = {
      student: student,
      firstname: student.firstname,
      lastname: student.lastname,
      campusId: student.campusId,
      imageURL: student.imageURL,
      gpa: student.gpa,
      email: student.email,
      studentId: student.id, 
      redirect: false
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleSubmit = async event => {
    event.preventDefault();  
    
    if(!(this.props.allCampuses.map(({id}) => id)).includes(parseInt(this.state.campusId))){
      alert("Please enter a valid campusId.")
      this.setState({
        redirect: false
      })
    } 
    else{
      let student = this.state.student
      student.firstname = this.state.firstname
      student.lastname = this.state.lastname
      student.campusId = this.state.campusId
      student.imageURL = this.state.imageURL
      student.gpa = this.state.gpa
      student.email = this.state.email
 
      await this.props.editStudent(student);

      this.setState({
        firstname: '', 
        lastname: '', 
        campusId: '', 
        email: '',
        imageURL: '',
        gpa: '',
        redirect: true
      });
    }
  }
  render() {
    if(this.state.redirect) {
      return (<Redirect to={`/student/${this.props.match.params.id}`}/>)
    }
    return (
      <div>
        <Header />
        <EditStudentView student={this.props.student} 
        handleChange = {this.handleChange} 
        handleSubmit={this.handleSubmit}
        allCampuses={this.props.allCampuses}
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