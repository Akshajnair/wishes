import React, { Component } from 'react'
var a = ''
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
      y: 0,
      scale: 1,
      place: 1,
      img:
        this.props.arr[this.props.key1].image1 ||
        window.location.origin + '/bg-default.webp',
      radius: '50%',
      name:
        this.props.arr[this.props.key1].nickname ||
        this.props.arr[this.props.key1].name,
      color: ''
    }
    this.wishdisp = this.wishdisp.bind(this)
    this.myRef = React.createRef()
  }

  componentDidMount () {
    const index = this.props.key1 + 1
    const a = this.props.staticposition(index)
    this.setState({ top: a.top, left: a.left })
    // this.makecenter()
  }
  colorc=0
  color () {
    if (this.colorc > 100) {
      this.setState({
        color:
          'rgb(' +
          Math.random() * 250 +
          ',' +
          Math.random() * 250 +
          ',' +
          Math.random() * 250 +
          ',' +
          '.5)'
      })
      this.colorc=0
    }
    this.colorc=this.colorc+1
  }
  position () {
    if (!this.props.isPositionOutside) {
      if (this.state.scale === 1) {
        a =
          -(this.props.position.x / this.props.elementDimensions.width - 0.5) *
            this.state.move *
            161 +
          'px,' +
          -(this.props.position.y / this.props.elementDimensions.height - 0.5) *
            this.state.move *
            320 +
          'px'
      } else a = '0px,0px'
      return a
    } else return '0px,0px'
  }
  makecenter () {
    const dimension = Math.ceil(Math.sqrt(this.props.length))
    const middle = Math.ceil(dimension / 2)
    if (this.props.key1 + 1 === dimension * middle - (middle - 1)) {
      console.log(this.props.key1 + 1)
    }
  }
  wishdisp () {
    if (this.state.scale === 1)
      this.setState({
        scale: 5,
        place: 0,
        size: '100%',
        top: 0,
        left: 0,
        radius: 0
      })
    else {
      this.setState({
        scale: 1,
        place: 1,
        size: this.props.size,
        radius: '50%'
      })
      this.componentDidMount()
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
    this.color()
    return (
      <div
        className='floating-card'
        onClick={this.wishdisp}
        style={{
          transform: 'translate(' + this.position() + ')',
          marginTop: this.state.top,
          marginLeft: this.state.left,
          height: this.state.size,
          width: this.state.size,
          zIndex: this.state.scale,
          backgroundImage: 'url(' + this.state.img + ')',
          borderRadius: this.state.radius
        }}
      >
        <div
          className='color-overlay'
          style={{
            height: '100%',
            width: '100%',
            borderRadius: this.state.radius,
            backgroundColor: this.state.color
          }}
        >
          {this.state.name}
        </div>
      </div>
    )
  }
}
