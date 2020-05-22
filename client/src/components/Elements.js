import React, { Component } from 'react'

export default class Elements extends Component {
  constructor (props) {
    super(props)
    this.state = {
      size: this.props.size,
      gap: this.props.gap,
      move: 10,
      top: 0,
      left: 0,
      x: 0,
      y: 0
    }
    // this.size = this.size.bind(this)
    this.myRef = React.createRef()
  }
  componentDidMount () {
    const index=this.props.key1 + 1
    const a = this.props.staticposition(index)
    this.setState({ top: a.top, left: a.left })
    // this.makecenter()
  }
  position () {
    if (!this.props.isPositionOutside) {
      return (
        -(this.props.position.x / this.props.elementDimensions.width - 0.5) *
          this.state.move *
          161 +
        'px,' +
        -(this.props.position.y / this.props.elementDimensions.height - 0.5) *
          this.state.move *
          320 +
        'px'
      )
    } else return '0px,0px'
  }
  color () {
    return Math.floor(Math.random() * 16777215).toString(16)
    // return '#e0e0e0'
  }
  makecenter () {
    const dimension = Math.ceil(Math.sqrt(this.props.length))
    const middle = Math.ceil(dimension / 2)
    if (this.props.key1 + 1 === dimension * middle - (middle - 1)) {
      console.log(this.props.key1 + 1)
    }
  }
  ifcenter () {
    const left =
      this.state.left -
      (this.props.position.x / this.props.elementDimensions.width - 0.5) *
        this.state.move
    const top =
      this.state.top -
      (this.props.position.y / this.props.elementDimensions.height - 0.5) *
        this.state.move
    if (
      (this.state.top -
        (this.props.position.y / this.props.elementDimensions.height - 0.5) *
          this.state.move) /
        483 >=
        0.9 &&
      (this.state.top -
        (this.props.position.y / this.props.elementDimensions.height - 0.5) *
          this.state.move) /
        483 <=
        1.1
    )
      return '350px'
    else return '250px'
  }

  render () {
    const color=this.color()
    return (
      <div
        className='floating-card'
        ref={el => {
          if (!el) return
          else return
        }}
        style={{
          transform: 'translate(' + this.position() + ')',
          marginTop: this.state.top,
          marginLeft: this.state.left,
          backgroundColor: '#'+color,
          height: this.state.size,
          width: this.state.size
        }}
      >
        {this.props.key1 + 1} {this.props.length}
      </div>
    )
  }
}
