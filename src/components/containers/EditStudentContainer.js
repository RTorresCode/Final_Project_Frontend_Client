//import Header from './Header';

import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { editStudentThunk } from '../../store/thunks';
import { fetchStudentThunk } from "../../store/thunks";


class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: this.props.student.firstname, 
          lastname: this.props.student.lastname, 
          email: this.props.student.email,
          gpa: this.props.student.gpa,
          gpaError: "",
          campusId: this.props.student.campusId, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting student ID from url
        this.props.fetchStudent(this.props.match.params.id);
      }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value},() => {
          this.validateGPA();
      });
        console.log(this.state);
    }
  //Checking the GPA and console logging the error if invalid
      validateGPA = () => {
        const { gpa } = this.state;
        this.setState({
          gpaError:
            gpa <= 4 ? null : 'GPA Must be less Than or equal to 4.0'
        });
      }
    handleSubmit = async event => {
        event.preventDefault();

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            campusId: this.state.campusId,
            email: this.state.email,
            gpa: this.state.gpa,
            id: this.props.student.id
        };
        console.log(this.state.campusId)
        console.log("student: ")
        console.log(student)

        console.log("this.props.student: ")
        console.log(this.props.student)

        if (student.campusId === "") {
          student.campusId = null;
        }

        let newStudent = await this.props.editStudent(student);

        console.log("newStudent: ")
        console.log(newStudent)

        this.setState({
          firstname: "", 
          lastname: "", 
          email: "",
          gpa: 0,
          campusId: null, 
          redirect: true, 
            redirectId: newStudent.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
            <EditStudentView 
            student={this.props.student}
            editStudent={this.props.editStudent}
            deleteStudent={this.props.deleteStudent}
            fetchStudent={this.props.fetchStudent}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapState = (state) => {
    return {
      student: state.student,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);