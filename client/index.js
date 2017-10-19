import './index.scss'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import store from './store'
import Routes from './routes'
var ReactGA = require('react-ga');
ReactGA.initialize('UA-000000-01');

// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)
