import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'
import dbcon from './dbcon'

export class Slidedisp extends Component {
  constructor (props) {
    super(props)
    this.onchange = this.onchange.bind(this)
    this.onDrop = this.onDrop.bind(this)
    this.ondel1 = this.ondel1.bind(this)
    this.ondel2 = this.ondel2.bind(this)
  }
  ondel1 () {
    this.props.imageedit(this.props.slideno, 1, this.props.slide.image2)
    this.ondel2()
  }
  ondel2 () {
    this.props.imageedit(this.props.slideno, 2, '')
  }
  img1 () {
    if (this.props.slide.image1)
      return (
        <div className='inside-img'>
          <img src={this.props.slide.image1} alt='' />
          <button onClick={this.ondel1} className='img-delete'>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      )
  }
  addimg () {
    if (this.props.slide.image2)
      return (
        <div className='inside-img'>
          <img src={this.props.slide.image2} alt='' />
          <button onClick={this.ondel2} className='img-delete'>
            <i className='fa fa-trash'></i>
          </button>
        </div>
      )
    else
      return (
        <ImageUploader
          withIcon={false}
          fileContainerStyle={{
            margin: '0px',
            padding: '0px',
            boxShadow: '0px'
          }}
          className='pic-add-input'
          withLabel={false}
          onChange={this.onDrop}
          buttonClassName='fa fa-plus pic-add'
          buttonText=''
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
        />
        // <button className='pic-add'>
        //   <i className='fa fa-plus'></i>
        // </button>
      )
  }
  onchange (e) {
    this.props.memoedit(this.props.slideno, e.target.value)
  }
  onDrop (picture) {
    const this1 = this
    this.props.loadtoggle()
    var a = 1
    if (this.props.slide.image1) {
      a = 2
    }
    const code = window.location.pathname.split('/')[2]
    dbcon.imageupload(code + this1.props.slideno + '' + a, picture, function (
      response
    ) {
      this1.props.imageedit(this1.props.slideno, a, response.data.imageUrl)
    })
  }
  render () {
    if (this.props.num === 0)
      return (
        <div className='message'>
          <div className='no-slide-head'>Nothing to display</div>
          <div className='no-slide-sub-head'>
            Click on <b>+ Add slide</b> to continue creating the Memories
          </div>
        </div>
      )
    else
      return (
        <div className='message'>
          <div className='son-images'>
            {this.img1()}
            {this.addimg()}
          </div>
          <textarea
            className='message-from'
            placeholder='Write Your Message Here'
            onChange={this.onchange}
            value={this.props.slide.memo}
          />
        </div>
      )
  }
}

export default Slidedisp
