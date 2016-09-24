import React from 'react'
import { Flex, Box } from 'reflexbox'
import Icon from 'react-fa'

import CSSModules from 'react-css-modules'
import style from './style'


@CSSModules(style, { allowMultiple: true })
export default class Dribbble_1_Slider extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="arrow arrowLeft"></div>
        <div styleName="arrow arrowRight"></div>

        <div styleName="date">
          <div styleName="month">OCT</div>
          <div styleName="day">23</div>
          <div styleName="year">2016</div>
        </div>

        <div styleName="card">
          <div styleName="cardTitle">On aliases THEATRE</div>
          <div styleName="cardAddress">Place</div>
          <div styleName="cardTimeContainer">
            <Flex justify="space-between">
              <Box>
                <div styleName="cardTimeValue">19:30</div>
                <div styleName="cardTimeTitle">Start time</div>
              </Box>
              <Box>
                <div styleName="cardTimePipe"></div>
              </Box>
              <Box>
                <div styleName="cardTimeValue">2:33</div>
                <div styleName="cardTimeTitle">Duration</div>
              </Box>
            </Flex>
          </div>
          <div styleName="cardBookButton">
            <Icon name="shopping-cart" />
            <span>Book a ticket</span>
          </div>
          <div styleName="cardDeadline">Booking stop OCT 28, PM 18:00</div>
        </div>

        <div styleName="content">
          <div styleName="title">The night before the forests of Bernard Marie Koltes <div styleName="label">Free</div></div>
          <div styleName="genre">Comedy</div>
          <div styleName="notice">Price in checkout: 50 KR | Normal price: 100 - 420 KR</div>
        </div>
      </div>
    )
  }
}
