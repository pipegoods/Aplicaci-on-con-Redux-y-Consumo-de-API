import React, { Fragment } from 'react';
import './index.css';
import {
    Link
  } from "react-router-dom";

function Page(props) {

    return (
        <Fragment>
            <nav className=" color-azul blue darken-1">
                <div className="nav-wrapper container">
                    <Link className="brand-logo center" to="/"><i className="material-icons">work</i>Igloo Lab</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="mobile.html"><i className="material-icons">exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="#"><i className="material-icons">exit_to_app</i> Cerrar sesión</a></li>
            </ul>
        </Fragment>
    );
}

export default Page;