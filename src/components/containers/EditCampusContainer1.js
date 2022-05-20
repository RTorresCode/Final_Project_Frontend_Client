import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import EditCampusView from '../views/EditCampusView';
import { editCampusThunk } from '../../store/thunks';
import { fetchCampusThunk } from "../../store/thunks";


class EditCampusContainer extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      name: this.props.campus.name, 
      imageUrl: this.props.campus.imageUrl,
      address: this.props.campus.address, 
      description: this.props.campus.description, 
      redirect: false, 
      redirectId: null
    }
  }

  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
}


handleChange = event => {
  this.setState({
      [event.target.name]: event.target.value
  });
  console.log("changes have been made");
}
  
    
handleSubmit = async event => {
  event.preventDefault(); 

  let campus = this.state.campus
        campus.name = this.state.name
        campus.address = this.state.address
        campus.imageUrl = this.state.imageUrl
        campus.description = this.state.description
        
        await this.props.editCampus(campus);
        this.setState({
          name: '',
          address: '',
          imageUrl: '',
          description: '',
          redirect: true
        });      
    }
    render() {
      if(this.state.redirect) {
        return (<Redirect to={`/campus/${this.props.match.params.id}`}/>)
      }
      return (
        <div>
          <Header />
          <EditCampusView campus={this.props.campus}
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          allStudents={this.props.allStudents}
          />
        </div>
      );
    }
  }
  
  const mapState = (state) => {
    return {
      campus: state.campus,
      allStudents: state.allStudents
    };
  };
  const mapDispatch = (dispatch) => {
    return {
      fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
      editCampus: (campus) => dispatch(editCampusThunk(campus)),
      fetchAllStudents: () => dispatch(fetchAllStudentsThunk())
    };
  };

  export default connect(mapState, mapDispatch)(EditCampusContainer);
       






        