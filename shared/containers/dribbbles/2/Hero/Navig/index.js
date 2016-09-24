import React from 'react'
import cx from 'classnames'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style, { allowMultiple: true })
export default class Dribbble_1_Navig extends React.Component {
  static defaultProps = {
    navig: [ 'Booking', 'Subscriptions', 'My Tickets', 'Financial History' ]
  }

  constructor() {
    super()

    this.state = {
      activeNavigIndex: 0,
    }
  }

  navigate = (index) => {
    this.setState({
      activeNavigIndex: index
    })
  }


  render() {
    const { activeNavigIndex } = this.state
    const { navig } = this.props

    return (
      <div styleName="navig">
        {
          navig.map((item, index) => {
            const styleName = cx('navigItem', {
              'active': index == activeNavigIndex
            })

            return (
              <div key={index} styleName={styleName} onClick={() => this.navigate(index)}>{item}</div>
            )
          })
        }
      </div>
    )
  }
}
