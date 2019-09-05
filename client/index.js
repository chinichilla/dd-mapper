import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router} from 'react-router-dom'
import history from './history'
import store from './store'
import App from './app'
import 'semantic-ui-css/semantic.min.css'

// https://www.youtube.com/watch?v=d1RG9MeC47k&list=PLR2qQy0Zxs_UpmxF0qqorwYcSQFcRCuHo&index=3
// establishes socket connection
import './socket'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
