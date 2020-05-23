import { Component } from 'react'
import axios from 'axios'

export class dbcon extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // baseurl: 'http://localhost:5000'
      baseurl: window.location.origin
    }
  }
  create (name, nickname, callback) {
    const options = {
      url: this.state.baseurl + '/memo/add',
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        name: name,
        nickname: nickname
      }
    }
    axios(options)
      .then(res => {
        callback(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
  updateslide (code, name, nickname, slides, callback) {
    const options = {
      url: this.state.baseurl + '/memo/update/' + code,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      },
      data: {
        name: name,
        nickname: nickname,
        slides: slides
      }
    }
    axios(options)
      .then(res => {
        callback(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
  fetchslide (id, callback) {
    axios
      .get(this.state.baseurl + '/memo/' + id)
      .then(response => {
        callback(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  fetchallslide (callback) {
    axios
      .get(this.state.baseurl + '/memo/')
      .then(response => {
        callback(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  imageupload (name, image, callback) {
    const fd = new FormData()
    fd.append('myImage', image[0])
    axios({
      method: 'post',
      url: this.state.baseurl + '/images/add/' + name,
      data: fd
    })
      .then(res => {
        console.log(res)
        callback(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

const db = new dbcon()
export default db
