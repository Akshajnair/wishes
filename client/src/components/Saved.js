import React, { Component } from 'react'

export default class Saved extends Component {
  edit () {
    window.location =
      window.location.origin + '/wish/' + window.location.pathname.split('/')[2]
  }
  home () {
    window.location = window.location.origin + '/wish'
  }
  render () {
    return (
      <div>
        <div className='container'>
          <div className='saved-page'>
            <div className='error-text'>Yeeeee :)</div>
            <div className='err-sub-text'>Your Wish is Saved :)</div>
            <div className='code-disp'>
              {window.location.pathname.split('/')[2]}
            </div>
            <div className='err-sub-text'>
              Copy this code for future edit purpose
            </div>
            <button className='compose' onClick={this.edit}>
              edit Some more
            </button>
            <button className='compose' onClick={this.home}>
              Return to home
            </button>
          </div>
        </div>
      </div>
    )
  }
}
