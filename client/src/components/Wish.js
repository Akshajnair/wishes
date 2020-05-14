import React, { Component } from 'react'
import Slidedisp from './Slidedisp'
import Slide from './Slide'
import Loader from './Loader'
import dbcon from './dbcon'

export class Wish extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      nickname: '',
      slides: [],
      slidedisp: 0,
      loading: true,
      nameerr: '',
      idnotfound: false
    }
    this.selectslide = this.selectslide.bind(this)
    this.onchange = this.onchange.bind(this)
    this.memoedit = this.memoedit.bind(this)
    this.onsave = this.onsave.bind(this)
    this.addslide = this.addslide.bind(this)
    this.ondel = this.ondel.bind(this)
    this.imageedit = this.imageedit.bind(this)
    this.loadtoggle = this.loadtoggle.bind(this)
    this.onstart()
  }
  onstart () {
    const this1 = this
    const code = window.location.pathname.split('/')[2]
    dbcon.fetchslide(code, function (res) {
      if (res === 'Error') this1.setState({ loading: false, idnotfound: true })
      else
        this1.setState({
          name: res.name,
          nickname: res.nickname,
          slides: res.slide,
          loading: false,
          idnotfound: false
        })
    })
  }
  selectslide (index) {
    this.setState({ slidedisp: index })
  }
  onchange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  slide () {
    return this.state.slides.map((slide, key) => {
      return (
        <Slide
          slide={slide}
          key1={key}
          key={key}
          slidedisp={this.state.slidedisp}
          selectslide={this.selectslide}
          ondel={this.ondel}
        />
      )
    })
  }
  onsave () {
    const this1 = this
    if (this.state.name.length >= 4) {
      this.setState({ loading: true, nameerr: '' })
      const code = window.location.pathname.split('/')[2]
      dbcon.updateslide(
        code,
        this.state.name,
        this.state.nickname,
        this.state.slides,
        function (res) {
          window.location=window.location.origin+'/saved/'+window.location.pathname.split('/')[2]
        }
      )
    } else this.setState({ nameerr: 'min length is 4' })
  }
  addslide () {
    this.setState({
      slides: this.state.slides.concat({ image1: '', image2: '', memo: '' })
    })
  }
  slidedisplay () {
    return (
      <Slidedisp
        slide={this.state.slides[this.state.slidedisp]}
        slideno={this.state.slidedisp}
        memoedit={this.memoedit}
        imageedit={this.imageedit}
        loadtoggle={this.loadtoggle}
        num={this.state.slides.length}
      />
    )
  }
  ondel (index) {
    var array = [...this.state.slides] // make a separate copy of the array
    if (index !== -1) {
      array.splice(index, 1)
      this.setState({ slides: array, slidedisp: 0 })
    }
    console.log(index)
  }
  imageedit (index, imageno, url) {
    const newslides = this.state.slides.slice()
    if (imageno === 1) newslides[index].image1 = url
    else newslides[index].image2 = url
    this.setState({ slides: newslides, loading: false })
  }
  loadtoggle () {
    if (this.state.loading) this.setState({ loading: false })
    else this.setState({ loading: true })
  }
  memoedit (index, obj) {
    const newslides = this.state.slides.slice()
    newslides[index].memo = obj
    this.setState({ slides: newslides })
  }
  returntowish () {
    window.location = window.location.origin + '/wish'
  }
  invalidid () {
    return (
      <div className='container'>
        <div className='invalid-id'>
          <div className='error-text'>Ooh oh!</div>
          <div className='err-sub-text'>Looks like Your code is Wrong</div>
          <button className='compose' onClick={this.returntowish}>
            Return
          </button>
        </div>
      </div>
    )
  }
  render () {
    if (this.state.loading === true) return <Loader />
    else if (this.state.idnotfound === true) return this.invalidid()
    else
      return (
        <div>
          <div className='dashboard'>
            <div className='left'>
              <div className='navigation'>
                <div className='wrapper2'>
                  <div className='folders'>ADD your Details</div>
                  <div className='folder-icons'>
                    <div className='icon-name1'> Your Name</div>
                  </div>
                  <input
                    type='text'
                    name='name'
                    placeholder='Your Name'
                    onChange={this.onchange}
                    value={this.state.name}
                  />
                  <div className='name-err'>{this.state.nameerr}</div>
                  <div className='folder-icons'>
                    <div className='icon-name'>Nick Name</div>
                  </div>
                  <input
                    type='text'
                    name='nickname'
                    placeholder='Nick Name'
                    onChange={this.onchange}
                    value={this.state.nickname}
                  />
                </div>
              </div>
            </div>
            <div className='right-side'>
              <div className='right-header'>
                <div className='top-bar'>
                  <div className='top-bar-justify'>
                    <div className='big-inbox'>Wish</div>
                    <div className='save-ico'>
                      <button className='compose' onClick={this.onsave}>
                        <i className='fa fa-save'></i>
                        {'   '}Save
                      </button>
                    </div>
                  </div>
                </div>
                <hr className='new-hr' />
              </div>
              <div className='right-body'>
                <div className='scroll-cards'>
                  {this.slide()}
                  <button className='compose' onClick={this.addslide}>
                    Add Slide
                    <span className='plus'>
                      <img src='https://i.ibb.co/v1HxGWj/add-1.png' alt='' />
                    </span>
                  </button>
                </div>
                {this.slidedisplay()}
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default Wish
