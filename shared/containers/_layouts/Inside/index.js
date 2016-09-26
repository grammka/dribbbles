import React from 'react'
import { Scrollbars } from 'react-custom-scrollbars'

import CSSModules from 'react-css-modules'
import style from './style'

import Header from './Header'


@CSSModules(style)
export default class InsideLayout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        <div styleName="content">
          <Scrollbars
            className={style.scroll}
            autoHide={false}
          >
            {children}
          </Scrollbars>
        </div>
      </div>
    )
  }
}
