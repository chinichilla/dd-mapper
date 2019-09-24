import React from 'react'
import {MainNavbar, MainFooter} from './components/'
import Routes from './Routes'

const App = () => {
  return (
    <div>
      <MainNavbar />
      <Routes />
      <MainFooter />
    </div>
  )
}

export default App
