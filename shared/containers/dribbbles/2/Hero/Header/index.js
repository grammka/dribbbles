import React from 'react'
import { Flex, Box } from 'reflexbox'
import Icon from 'react-fa'

import CSSModules from 'react-css-modules'
import style from './style'

import Avatar from 'components/Avatar'


@CSSModules(style, { allowMultiple: true })
export default class Dribbble_1_Header extends React.Component {
  static defaultProps = {
    userAvatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/boheme/128.jpg'
  }

  render() {
    const { userAvatar } = this.props

    return (
      <div styleName="container">
        <div styleName="center">
          <Flex justify="space-between" align="center">
            <Box auto>
              <div styleName="logo">ALFA FUTURE THEATRE</div>
            </Box>
            <Box>
              <div styleName="deposite">Deposit money</div>
            </Box>
            <Box>
              <div styleName="pipe"></div>
            </Box>
            <Box>
              <div styleName="balance">140.00 KR</div>
            </Box>
            <Box>
              <div styleName="pipe"></div>
            </Box>
            <Box>
              <div styleName="userName">Niles Orval</div>
              <div styleName="logoutLink">logout</div>
            </Box>
            <Box>
              <Avatar styleName="avatar" src={userAvatar} size={40} circle />
            </Box>
          </Flex>
        </div>
      </div>
    )
  }
}
