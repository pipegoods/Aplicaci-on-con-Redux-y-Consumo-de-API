import React, { Component } from 'react';
import Page from './page';
import axios from 'axios';
const API_URL = 'https://reqres.in/api';

class CardUser extends Component {

    state = {
        users: []
    }
    componentDidMount() {
        const url = `${API_URL}/users/`;
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ users: data.data })
            })
    }

    render() {

        return (
            <Page 
                listaUsuarios={this.state.users}
            />
        );
    }
}

export default CardUser;