import React, { Component } from 'react'

export class Slide extends Component {
    constructor (props) {
        super(props)
        this.onclick=this.onclick.bind(this)
    }
    onclick(){
        this.props.selectslide(this.props.key1)
    }
  render () {
    return (
      <div className='card'>
        <button onClick={this.onclick} className='mail-info'>Slide {this.props.key1+1}</button>
        <button onClick={this.onclick} className='slide-delete'><i className="fa fa-trash"></i></button>
      </div>
    )
  }
}

export default Slide
