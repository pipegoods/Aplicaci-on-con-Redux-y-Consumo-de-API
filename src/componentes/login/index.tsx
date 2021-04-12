import React, {Component} from 'react';
import Page from './page';
import { connect } from 'react-redux';

type MyState = { currentuser: object };

class Login extends Component<MyState> {
   

    render() {
        const {currentuser} = this.props;
        console.log(currentuser);
        
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

export default connect(mapStateToProps)(Login);