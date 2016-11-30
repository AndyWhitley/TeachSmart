import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import Home from './Home'
import Lessons from './Lessons'
import Assignments from './Assignments'
import './index.css';

ReactDOM.render((
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Home }/>
      <Route path="/lessons" component={ Lessons }/>
      <Route path="/assignments" component={ Assignments }/>
    </Route>
  </Router>
), document.getElementById('root')
);