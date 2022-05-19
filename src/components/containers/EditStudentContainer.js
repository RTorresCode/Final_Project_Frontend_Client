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

    

    