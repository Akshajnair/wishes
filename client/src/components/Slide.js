import React, { Component } from 'react'

export class Slide extends Component {
  constructor (props) {
    super(props)
    this.onclick = this.onclick.bind(this)
    this.ondel = this.ondel.bind(this)
  }
  onclick () {
    this.props.selectslide(this.props.key1)
  }
  ondel () {
    this.props.ondel(this.props.key1)
  }
  activecard () {
    if (this.props.slidedisp === this.props.key1) return 'card-active'
    else return ''
  }
  render () {
    return (
      <div className={'card ' + this.activecard()}>
        <button onClick={this.onclick} className='mail-info'>
          Slide {this.props.key1 + 1}
        </button>
        <button onClick={this.ondel} className='slide-delete'>
          <i className='fa fa-trash'></i>
        </button>
      </div>
    )
  }
}

export default Slide
