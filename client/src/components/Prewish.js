import React, { Component } from 'react'
import dbcon from './dbcon'
import Loader from './Loader'

export class Prewish extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      nickname: '',
      code: '',
      loading: false,
      nameerr: ''
    }
    this.onchange = this.onchange.bind(this)
    this.onedit = this.onedit.bind(this)
    this.onnext = this.onnext.bind(this)
  }
  onchange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onedit () {
    window.location = window.location.origin + '/wish/' + this.state.code
  }
  onnext () {
    if (this.state.name.length >= 4) {
      this.setState({ loading: true, nameerr: '' })
      dbcon.create(this.state.name, this.state.nickname, function (res) {
        console.log(res)
        window.location = window.location.origin + '/wish/' + res.data
      })
    } else this.setState({ nameerr: 'min length is 4' })
  }
  render () {
    if (this.state.loading === true) return <Loader />
    else
      return (
        <div>
          <div className='container'>
            <div className='row row-align'>
              <div className='col-xl-6 vertical-line'>
                <div className='welcome-text'>New Here?</div>
                <div className='welcome-sub-text'>
                  Fill Your Name and Click Next to collect Your precious
                  Memories
                </div>
                <div className='welcome-input'>
                  <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    onChange={this.onchange}
                    value={this.state.name}
                  />
                  <div className='name-err'>{this.state.nameerr}</div>
                  <br />
                  <input
                    type='text'
                    placeholder='Nick Name'
                    name='nickname'
                    onChange={this.onchange}
                    value={this.state.nickname}
                  />
                </div>
                <button className='compose' onClick={this.onnext}>
                  Next <i className='fa fa-arrow-right'></i>
                </button>
              </div>
              <div className='col-xl-6'>
                <div className='welcome-text'>Already Written Something?</div>
                <div className='welcome-sub-text'>
                  Type Your Code and edit your Memories
                </div>
                <div className='welcome-input'>
                  <input
                    type='text'
                    placeholder='Code'
                    name='code'
                    onChange={this.onchange}
                    value={this.state.code}
                  />
                </div>
                <button onClick={this.onedit} className='compose'>
                  EDIT <i className='fa fa-edit'></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Prewish
