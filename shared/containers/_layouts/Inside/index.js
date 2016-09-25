import React from 'react'
import { browserHistory } from 'react-router'

import CSSModules from 'react-css-modules'
import style from './style'

import Header from './Header'

import dribbbles from '../../dribbbles/info'


@CSSModules(style)
export default class InsideLayout extends React.Component {
  componentDidMount() {
    this.bindListener()
  }

  componentWillUnmount() {
    this.unbindListener()
  }

  bindListener() {
    document.addEventListener('keyup', this.navigate)
  }

  unbindListener() {
    document.removeEventListener('keyup', this.navigate)
  }

  navigate = (event) => {
    if (event.keyCode != 37 && event.keyCode != 39) {
      return
    }

    const currentDribbleNum = Number(window.location.href.match(/\d+$/)[0])
    const prevAvailable = currentDribbleNum != 1
    const nextAvailable = currentDribbleNum != dribbbles.length

    let newDribbleNum

    if (event.keyCode == 37 && prevAvailable) {
      newDribbleNum = currentDribbleNum - 1
    }
    else if (event.keyCode == 39 && nextAvailable) {
      newDribbleNum = currentDribbleNum + 1
    }
    else {
      return
    }

    browserHistory.push(`/dribbbles/${newDribbleNum}`)
  }


  render() {
    const { children } = this.props

    return (
      <div>
        <Header />
        <div styleName="content">
          {children}
        </div>
      </div>
    )
  }
}
