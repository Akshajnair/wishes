import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Wish from './components/Wish'

function App () {
  return (
    <div className='App'>
      <Router>
        <Route
          exact
          path='/'
          render={props => {
            return <Home />
          }}
        />
        <Route
          exact
          path='/wish'
          render={props => {
            return <Wish />
          }}
        />
      </Router>
    </div>
  )
}

export default App
