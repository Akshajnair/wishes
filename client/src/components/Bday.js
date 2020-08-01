import React, { Component } from 'react'

export default class Bday extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      pass: '01199908',
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
      'https://drive.google.com/uc?export=view&id=12Z41lF24VY2fv57DaFDUbmUs5-yaTr9J'
  }
  redirect1 () {
    window.location =
      'https://drive.google.com/uc?export=view&id=1LESExefPTSVko6pSf2D2WoAlffIeNIEB'
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
        Happy birthday deepu ......actuall i was missing u ... vasa fayda ni ha
        bolne ka bcz u already know but still yrr..... <br/>u been there with me from
        last 2 years approx and 8 days bad to hamari anniversery bhi ha chalo
        uska kushi badme abhi to tera bday ha i want to be with u but hu ni so
        im writing this for u and i know agar tu ye msg padh rhi ha to u have a
        smile on ur face...... and sun na ....ik bday tera ha but me ek gift
        mangunga....plz be there with me for ups and down of my life luv u jaan
        and niche wali link bhi click kariyo<br/>
        and sry esa gift ke liya.....thoda time kam tha :(
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
            src='https://drive.google.com/uc?export=view&id=1IUymmpmST9Sdvn6yWvxuFYnn42gJI5fo'
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
