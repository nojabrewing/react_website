import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss'

import RootContainer from './js/containers/rootContainer'


ReactDOM.render((
  <Router>
    <RootContainer />
  </Router>)
  , document.getElementById('app'))
