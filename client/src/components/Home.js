import React, { Component } from 'react'
import ReactCursorPosition from 'react-cursor-position'
import Card from './Card'
// import Tilt from 'react-tilt'

export class Home extends Component {
  render () {
    return (
      <ReactCursorPosition>
        <Card />
      </ReactCursorPosition>
    )
  }
}

export default Home
