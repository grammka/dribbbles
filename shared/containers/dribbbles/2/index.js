import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'

import Hero from './Hero'


@CSSModules(style)
export default class Dribbble_2 extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <div styleName="content">
          Content
        </div>
      </div>
    )
  }
}
