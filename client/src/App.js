import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'

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
      </Router>
    </div>
  )
}

export default App
