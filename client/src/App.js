import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/Home'
import Prewish from './components/Prewish'
import Wish from './components/Wish'
import Loader from './components/Loader'
import Saved from './components/Saved'
import Cover from './components/Cover'

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
            return <Prewish />
          }}
        />
        <Route
          exact
          path='/wish/:id'
          render={props => {
            return <Wish />
          }}
        />
        <Route
          exact
          path='/saved/:id'
          render={props => {
            return <Saved />
          }}
        />
        <Route
          exact
          path='/loader'
          render={props => {
            return <Loader />
          }}
        />
        <Route
          exact
          path='/cover'
          render={props => {
            return <Cover />
          }}
        />
      </Router>
    </div>
  )
}

export default App
