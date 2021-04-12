import React, { Fragment } from 'react';
import './index.css';

function Page(props: any) {
    return (
        <Fragment>
            <div className="espacio-top"></div>
            <div className="center tamaño-logo">
                <img className="responsive-img" src="https://igloo-lab.com/wp-content/uploads/2020/10/logoOldSVG.svg" alt="Logo igloolab" />
            </div>
            <div className="valign-wrapper row login-box">
                <div className="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
                    <form>
                        <div className="card-content">
                            <span className="card-title">Iniciar sesión</span>
                            <div className="row">
                                <div className="input-field col s12">
                                    <label htmlFor="email">Correo electrónico</label>
                                    <input type="email" className="validate" name="email" id="email" />
                                </div>
                                <div className="input-field col s12">
                                    <label htmlFor="password">Contraseña </label>
                                    <input type="password" className="validate" name="password" id="password" />
                                </div>
                            </div>
                        </div>
                        <div className="card-action right-align">
                            <input type="reset" id="reset" className="btn-flat grey-text waves-effect" />
                            <input type="submit" className="btn blue waves-effect waves-light color-letras" value="Entrar" />
                        </div>
                    </form>
                </div>
            </div>

        </Fragment>
    );
}

export default Page;