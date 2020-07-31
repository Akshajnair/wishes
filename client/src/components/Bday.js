import React, { Component } from 'react'

export default class Bday extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      pass: '0108',
      disp: false,
      err:''
    }
    this.onchange = this.onchange.bind(this)
    this.onnext = this.onnext.bind(this)
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onnext () {
    if (this.state.pass === this.state.code) {
      this.setState({ disp: true })
    }
    else this.setState({ err: "Wrong pass :p" })
  }
  onclick(){
    window.location = 'https://drive.google.com/uc?export=view&id=12Z41lF24VY2fv57DaFDUbmUs5-yaTr9J'
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

  imgdisp () {
    return (
      <div>
        <div className='bcover' >
          <img src='https://drive.google.com/uc?export=view&id=1IUymmpmST9Sdvn6yWvxuFYnn42gJI5fo' onClick={this.onclick} /> 
        </div>
      </div>
    )
  }
  render () {
    if (this.state.disp)
    return this.imgdisp()
    return this.lock()
  }
}
