import React, { Component } from 'react'

export class Loader extends Component {
  render () {
    var size = 150
    var color = '#f276b6'
    return (
      <div className='loader'>
        <div className='lds-heart' style={{ width: size, height: size }}>
          <div
            style={{
              background: color,
              width: size * 0.4,
              height: size * 0.4,
              left: size * 0.3,
              top: size * 0.3
            }}
          >
            <div
              className='div-before'
              style={{
                background: color,
                width: size * 0.4,
                height: size * 0.4,
                left: -size * 0.3
              }}
            ></div>
            <div
              className='div-after'
              style={{
                background: color,
                width: size * 0.4,
                height: size * 0.4,
                top: -size * 0.3
              }}
            ></div>
          </div>
        </div>
        <div className='loader-text'>Loading...</div>
      </div>
    )
  }
}

export default Loader
