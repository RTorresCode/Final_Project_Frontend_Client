
import { Component } from 'react';
import { connect } from 'react-redux';

import EditCampusView from '../views/EditCampusView';
import { editCampusThunk } from '../../store/thunks';



class EditCampusContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageUrl: props.campus.imageUrl,
            address: "",
            description: "",
            id: props.campus.id,
            redirect: false,
            errorCaught: false,
            redirectId: null
        };
    }

    componentDidMount() {
        this.setState({
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            address: this.state.address,
            description: this.state.description,
            id: this.state.id
        });
    }

    handleChange = event => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit = async event => {
        event.preventDefault();

        let new_info = {
            name: this.state.name,
            imageUrl: this.state.imageUrl,
            address: this.state.address,
            description: this.state.description,
            id: this.state.id
        };
        if (new_info.imageUrl !== "") {
        }


        try {
            let campus = await this.props.editCampus(new_info)
            alert(`${new_info.name}'s edit was saved.`);

            this.setState({
                name: "",
                imageUrl: "",
                address: -1,
                description: "",
                id: -1,
                redirect: true,
            });
        }
        catch (err) {
            console.error(err);
            alert("Error with edit!");
            this.setState({
                errorCaught: true
            });
        };
    }

    componentWillUnmount() {
        this.setState({ redirect: false, redirectId: null });
    }

    render() {
        if (this.state.redirect) {
            window.location.reload();
        }

        return (
            <div>
                <EditCampusView
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    campus={this.props.campus}
                />
                {this.state.errorCaught ? (
                    <div>
                        <br />
                        <p>Campus name: Cannot be null.</p>
                        <p>Campus Image: Can't be left blank.</p>
                        <p>Campus address: Cannot be null.</p>
                        <p>Campus description: Can't be left blank.</p>
                    </div>
                ) : (
                    null
                )}
            </div>
        );
    }
}

const mapDispatch = (dispatch) => {
    return ({
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(EditCampusContainer);











