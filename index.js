import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Schedule from './app/screens/Schedule';
import './assets/styles.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Schedule} />
  </Router>,

  document.getElementById('container')
);
