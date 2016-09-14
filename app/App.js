require('./styles/icons.css');
// Add fetch support for browsers without fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';
import configureStore from './store/configureStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AuthService from './services/authService';

injectTapEventPlugin();

const store = configureStore();

// Init Firebase and Google Auth
const authService = new AuthService(store.dispatch);
authService.init();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
