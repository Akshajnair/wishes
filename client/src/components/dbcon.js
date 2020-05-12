import React, { Component } from 'react'
import axios from 'axios'

export class dbcon extends Component {
  imageupload (image, callback) {
    const fd = new FormData()
    fd.append('image', image[0])
    const options = {
      url: this.state.baseurl + '/images/add',
      method: 'POST',
      data: fd,
      headers: { 'content-type': 'multipart/form-data' }
    }
    console.log(image[0])
    axios(options)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default dbcon
