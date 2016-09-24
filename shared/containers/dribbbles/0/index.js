import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style)
export default class Dribbble_NUM extends React.Component {
  render() {
    return (
      <div>
        Dribble Name
      </div>
    )
  }
}
