import React from 'react'
import { browserHistory } from 'react-router'

import dribbbles from '../dribbbles/info'


export default class Root extends React.Component {
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
    if (window.location.pathname == '/') {
      return
    }

    if (event.keyCode != 37 && event.keyCode != 39) {
      return
    }

    const currentDribbleNum   = Number(window.location.pathname.match(/\d+$/)[0])
    const nextAvailable       = currentDribbleNum != dribbbles.length

    let link

    if (event.keyCode == 37) {
      if (currentDribbleNum == 1) {
        link = '/'
      } else {
        link = `/dribbbles/${currentDribbleNum - 1}`
      }
    }
    else if (event.keyCode == 39 && nextAvailable) {
      link = `/dribbbles/${currentDribbleNum + 1}`
    }
    else {
      return
    }

    browserHistory.push(link)
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}
