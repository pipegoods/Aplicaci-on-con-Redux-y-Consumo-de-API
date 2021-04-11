import React, { Fragment } from 'react';
import './index.css';

function Page(props) {

    const {
        listaUsuarios
    } = props;
    console.log(listaUsuarios);


    return (
        <Fragment>
            <div className="container">
                <ul className="collection">
                    {
                        listaUsuarios.map(user =>
                            <li key={user.id} className="collection-item avatar">
                                <img src={user.avatar} className="circle" alt="imagen fav"/>
                                <b className="title">{user.first_name} {user.last_name}</b>
                                <p>{user.email}
                                </p>
                                <a href={'https://linkedin.com/in/'+ user.first_name} rel="noreferrer" target="_blank" className="secondary-content"><i className="material-icons">email</i></a>
                            </li>

                        )
                    }
                </ul>
            </div>
        </Fragment>
    );
}

export default Page;