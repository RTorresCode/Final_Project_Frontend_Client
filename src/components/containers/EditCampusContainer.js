import Header from './Header';
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
            //imageUrl: this.state.imageUrl,
            id: this.props.campus.id
        };