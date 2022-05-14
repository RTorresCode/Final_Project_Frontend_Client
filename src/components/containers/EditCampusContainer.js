//import Header from './Header';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk } from '../../store/thunks';
import { fetchCampusThunk } from "../../store/thunks";

class EditCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: this.props.campus.name, 
          address: this.props.campus.address, 
          description: this.props.campus.description,
          //imageUrl: this.props.campus.imageUrl,
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        //getting campus ID from url
        this.props.fetchCampus(this.props.match.params.id);
      }
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }
  
    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            address: this.state.address,
            description: this.state.description,
            imageUrl: this.state.imageUrl,
            id: this.props.campus.id //id or campusID
        };

        console.log("campus: ")
        console.log(campus)

        console.log("this.props.campus: ")
        console.log(this.props.campus)

        let newCampus = await this.props.editCampus(campus);

        console.log("newCampus: ")
        console.log(newCampus)

        this.setState({
            name: "", 
            address: "", 
            description: "",
            imageUrl: 0,
            redirect: true, 
            redirectId: this.props.campus.id
          });
      }
  
      componentWillUnmount() {
          this.setState({redirect: false, redirectId: null});
      }

      render() {

        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
            
            <EditCampusView 
            campus={this.props.campus}
            editCampus={this.props.editCampus}
            deleteCampus={this.props.deleteCampus}
            fetchCampus={this.props.fetchCampus}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapState = (state) => {
    return {
      campus: state.campus,
    };
  };

const mapDispatch = (dispatch) => {
    return({
        fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    })
}

export default connect(mapState, mapDispatch)(EditCampusContainer);

  


