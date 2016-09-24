import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style)
export default class InsideLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        {children}
      </div>
    )
  }
}
