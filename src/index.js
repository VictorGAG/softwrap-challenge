/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import Table from './pages/Table';
import Register from './pages/Register';
import Edit from './pages/Edit';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Table} />
      <Route path="/register" exact component={Register} />
      <Route path="/edit" exact component={Edit} />
    </Switch>
  </Router>, document.getElementById('root'),
);
