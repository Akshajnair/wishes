import React, { Component } from 'react'
import Elements from './Elements'
import Loader from './Loader'

export default class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      arr: [
        { no: 1 },
        { no: 2 },
        { no: 3 },
        { no: 4 },
        { no: 5 },
        { no: 6 },
        { no: 7 },
        { no: 8 },
        { no: 9 },
        { no: 10 },
        { no: 11 },
        { no: 12 },
        { no: 13 },
        { no: 14 },
        { no: 15 },
        { no: 16 },
        { no: 20 },
        { no: 21 },
        { no: 22 },
        { no: 23 },
        { no: 19 },
        { no: 20 },
        { no: 21 },
        { no: 22 },
        { no: 23 }
      ],
      size: 300,
      gap: 20,
      top: 0,
      left: 0,
      loading: true
    }
    this.staticposition = this.staticposition.bind(this)
  }
  componentDidMount () {
    this.makecenter()
  }
  staticposition (index) {
    const dimension = Math.ceil(Math.sqrt(this.state.arr.length))
    const top =
      (this.state.size + 2 * this.state.gap) *
        Math.ceil(index / dimension - 1) +
      this.state.top
    const left =
      (this.state.size + 2 * this.state.gap) *
        Math.ceil((index - 1) % dimension) +
      this.state.left
    return { top: top, left: left }
  }
  makecenter () {
    const dimension = Math.ceil(Math.sqrt(this.state.arr.length))
    const middle = Math.ceil(dimension / 2)
    const center = dimension * middle - (middle - 1)
    const top =
      358 -
      (this.state.size + 2 * this.state.gap) * Math.ceil(center / dimension - 1)
    const left =
      835 -
      (this.state.size + 2 * this.state.gap) *
        Math.ceil((center - 1) % dimension)
    this.setState({ top: top, left: left ,loading:false})
  }
  elementdisp () {
    return this.state.arr.map((slide, key) => {
      return (
        <Elements
          position={{ x: this.props.position.x, y: this.props.position.y }}
          elementDimensions={{
            width: this.props.elementDimensions.width,
            height: this.props.elementDimensions.height
          }}
          isPositionOutside={this.props.isPositionOutside}
          key1={key}
          key={key}
          length={this.state.arr.length}
          staticposition={this.staticposition}
          size={this.state.size}
          gap={this.state.gap}
        />
      )
    })
  }

  render () {
    if (this.state.loading) return <Loader/>
    else return <div className='fullscreen-card'>{this.elementdisp()}</div>
  }
}
