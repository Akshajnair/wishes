import React, { Component } from 'react'
import Slidedisp from './Slidedisp'
import Slide from './Slide'

export class Wish extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slides: [
        {
          image1:
            'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
          image2:
            'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg',
          memo:
            '11111111111111111111111111111111111111111111111111111111111111111111111 11111111111111111111111111111111111111111111111111 111111111111111111111111111111111111111111111 111111111111111111111111111111'
        },
        {
          image1:
            'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
          image2: '',
          memo:
            '22222222222222222222222222222222222222 22222222222222222222222222222222222222222222 222222222222222222222222222222222222222222222222222222 22222222222222222222222222222'
        },
        {
          image1:
            'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
          image2: '',
          memo:
            '3333333333333333333333333333333333333 33333333333333333333333333333333333333333333333333333333 33333333333333333333333333333333333333333333333333333333333333333 3333333333333333'
        },
        {
          image1:
            'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
          image2: '',
          memo:
            '44444444444444444444444444444444444 4444444444444444444444444444444444444444444 44444444444444444444444444444444444444444444444444444444 444444444444444444444444444444444444'
        }
      ],
      slidedisp: 1
    }
    this.selectslide = this.selectslide.bind(this)
    this.onchange = this.onchange.bind(this)
    this.memoedit = this.memoedit.bind(this)
  }
  selectslide (index) {
    this.setState({ slidedisp: index })
  }
  onchange (e) {
    this.setState({ slidedisp: e.target.value })
    this.forceUpdate()
  }
  slide () {
    return this.state.slides.map((slide, key) => {
      return (
        <Slide
          slide={slide}
          key1={key}
          key={key}
          selectslide={this.selectslide}
        />
      )
    })
  }
  slidedisplay () {
    return (
      <Slidedisp
        slide={this.state.slides[this.state.slidedisp]}
        slideno={this.state.slidedisp}
        memoedit={this.memoedit}
      />
    )
  }
  memoedit (index, obj) {
    const newslides = this.state.slides.slice()
    newslides[index].memo = obj
    this.setState({ slides: newslides })
  }
  render () {
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
                  placeholder='Your Name'
                  onChange={this.onchange}
                  value={this.state.slidedisp}
                />
                <div className='folder-icons'>
                  <div className='icon-name'>Nick Name</div>
                </div>
                <input type='text' placeholder='Nick Name' />
              </div>
            </div>
          </div>
          <div className='right-side'>
            <div className='right-header'>
              <div className='top-bar'>
                <div className='top-bar-justify'>
                  <div className='big-inbox'>Wish</div>
                  <div className='save-ico'>
                    <button className='compose'>
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
                <button className='compose'>
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
