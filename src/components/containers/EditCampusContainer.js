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
          imageUrl: this.props.campus.imageUrl,
          redirect: false, 
          redirectId: null
        };
    }