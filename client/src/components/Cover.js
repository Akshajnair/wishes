import React, { Component } from 'react'
import Tilt from 'react-tilt'
import Countdown from 'react-countdown-now'

export default class Cover extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  componentDidMount () {
    const script = document.createElement('script')
    script.src = 'script.js'
    script.async = true
    document.body.appendChild(script)
  }
  redirect () {
    window.location = window.location.origin + '/wish'
  }
  timerdisp ({ days, hours, minutes, seconds, completed }) {
    return (
      <div className='timer-container'>
        <div className='timer-lift'>
          <div className='timer'>
            {days + 'D'} : {hours + 'H'} : {minutes + 'M'} : {seconds + 'S'}
          </div>
        </div>
      </div>
    )
  }

  render () {
    return (
      <Tilt
        className='Tilt'
        options={{ max: 35, perspective: 1000, scale: 0.9 }}
      >
        <div className='cover-head'>This cover will be removed after: </div>
        <Countdown date={new Date('8/1/2020')} renderer={this.timerdisp} />
        <div className='cover-button'>
          <button className='wish-redirect' onClick={this.redirect}>
            Want to Wish?
          </button>
        </div>
        <canvas className='ballon' id='c'></canvas>
      </Tilt>
    )
  }
}
