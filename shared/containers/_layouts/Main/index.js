import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style)
export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div styleName="container">
        <Scrollbars
          className={style.scroll}
          autoHide={false}
        >
          {children}
        </Scrollbars>
      </div>
    )
  }
}
