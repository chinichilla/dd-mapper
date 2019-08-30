import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import {Navbar} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
