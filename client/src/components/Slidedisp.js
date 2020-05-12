import React, { Component } from 'react'
import ImageUploader from 'react-images-upload'
import dbcon from './dbcon'

export class Slidedisp extends Component {
  constructor (props) {
    super(props)
    this.onchange = this.onchange.bind(this)
  }
  img1 () {
    if (this.props.slide.image1)
      return (
        <div className='inside-img'>
          <img src={this.props.slide.image1} alt='' />
        </div>
      )
  }
  addimg () {
    if (this.props.slide.image2)
      return (
        <div className='inside-img'>
          <img src={this.props.slide.image2} alt='' />
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
          buttonText='Choose images'
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
    dbcon.imageupload(picture, function (response) {
      console.log(response)
    })
  }
  render () {
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
