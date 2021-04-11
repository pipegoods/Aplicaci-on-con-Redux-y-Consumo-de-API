import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Home from './componentes/home';
import Login from './componentes/login';
import Register from './componentes/register';
import { Provider } from 'react-redux';
import store from './redux/store';

function Router() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default Router;
