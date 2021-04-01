import React, { Component } from 'react'

export default class Bday extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      pass: '01199980',
      disp: false,
      err: '',
      content: false
    }
    this.onchange = this.onchange.bind(this)
    this.onnext = this.onnext.bind(this)
    this.onclick = this.onclick.bind(this)
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onnext () {
    if (this.state.pass === this.state.code) {
      this.setState({ disp: true })
    } else this.setState({ err: 'Wrong pass :p' })
  }
  onclick () {
    this.setState({ content: true })
  }
  redirect () {
    window.location =
      ''
  }
  redirect1 () {
    window.location =
      ''
  }
  lock () {
    return (
      <div className='container'>
        <div className='row row-align'>
          <div className='col-xl-12'>
            <div className='welcome-text'>Happy Birthday Deepu</div>
            <div className='welcome-sub-text'>
              enter my phone password to view the page
            </div>
            <div className='welcome-input'>
              <input
                type='text'
                placeholder='CODE'
                name='code'
                onChange={this.onchange}
                value={this.state.code}
              />
              <div className='name-err'>{this.state.err}</div>
              <br />
            </div>
            <button className='compose' onClick={this.onnext}>
              Next <i className='fa fa-arrow-right'></i>
            </button>
          </div>
        </div>
      </div>
    )
  }
  content () {
    return (<div>
      <div className='bcontent'>
      </div>
      <div className='cover-button'>
          <button className='wish-redirect' onClick={this.redirect}>
            Surprise?
          </button>
          <button className='wish-redirect' onClick={this.redirect1}>
            Surprise 2 :P
          </button>
        </div>
      </div>
    )
  }
  imgdisp () {
    return (
      <div>
        <div className='bcover'>
          <img
            src=''
            onClick={this.onclick}
          />
        </div>
      </div>
    )
  }
  render () {
    if (this.state.disp) {
      if (this.state.content) 
      return this.content()
      else return this.imgdisp()
    }
    return this.lock()
  }
}
