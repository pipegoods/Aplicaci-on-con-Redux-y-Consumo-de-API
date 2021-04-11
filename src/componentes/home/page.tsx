import React, { Fragment } from 'react';
import CardUser from './carduser';
import Navbar from './navbar';

function Page(props) {

    
    return (
        <Fragment>
            
            <Navbar />


            <h3 className="center-align">Lista de usuarios - reqres.in</h3>
            <br/>

            <CardUser />


        </Fragment>
    );
}

export default Page;