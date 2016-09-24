import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style)
export default class MainLayout extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}
