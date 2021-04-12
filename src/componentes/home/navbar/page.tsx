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
                    <a data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><Link to="/"><i className="material-icons">exit_to_app</i> Cerrar sesión</Link></li>
                    </ul>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><Link to="/"><i className="material-icons">exit_to_app</i> Cerrar sesión</Link></li>
            </ul>
        </Fragment>
    );
}

export default Page;