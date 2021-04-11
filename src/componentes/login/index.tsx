import React, {Component} from 'react';
import Page from './page';
import { connect } from 'react-redux';

class Login extends Component {
    render() {
        return (
            <Page />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentuser: state.currentuser
    };
}

connect(mapStateToProps);

export default Login;