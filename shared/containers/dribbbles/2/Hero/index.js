import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Header from './Header'
import Navig from './Navig'
import Slider from './Slider'

import imageHero from './images/hero-bg.jpg'


@CSSModules(style)
export default class Dribbble_1_Hero extends React.Component {
  render() {
    return (
      <div styleName="container" style={{ backgroundImage: `url(${imageHero})` }}>
        <Header />
        <div styleName="center">
          <Navig />
          <Slider />
        </div>
      </div>
    )
  }
}
