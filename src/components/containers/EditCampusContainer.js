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
      const {name, value, type, checked} = event.target
      type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
  
    handleSubmit = async event => {
      event.preventDefault();

      let new_info = { 
        name: this.state.name,
        description: this.state.description,
        address: this.state.address,
        imageUrl: this.state.imageUrl,
        id: this.state.id
      };
      if (new_info.imageUrl === "") { 
        delete new_info.imageUrl; 
      }
      try {
        let campus = await this.props.editCampus(new_info)
        console.log(campus.id); 
        alert(`${new_info.name}'s edit was saved.`); 
        
        this.setState({
          name: "", 
          address: "", 
          description: "",
          imageUrl: "",
          redirect: true, 
          id: -1
        });
      }
      catch(err) {  
        console.error(err); 
        alert("Error with edit!");
        this.setState({
          errorCaught: true 
        });
      }

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
        <EditCampusView
          handleChange = {this.handleChange} 
          handleSubmit={this.handleSubmit}
          campus={this.props.campus}  
        />
        {this.state.errorCaught ? (
          <div>
            <br />
            <p>Campus name: Cannot be null.</p>
            <p>Campus address: Cannot be null.</p>
            <p>Campus Image: Should be a valid image link, or can be left blank.</p>
            <p>Campus Description: Can be null.</p>
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
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}


export default connect(null, mapDispatch)(EditCampusContainer);

       






        