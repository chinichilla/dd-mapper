import React from 'react'
import {MainNavbar, MainFooter} from './components/'
import Routes from './Routes'

const App = () => {
  return (
    <div className="App">
      <MainNavbar />
      <body>
        <main>
          <Routes />
        </main>
      </body>
      <MainFooter />
    </div>
  )
}

export default App
