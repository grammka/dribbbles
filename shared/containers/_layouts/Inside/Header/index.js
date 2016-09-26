import React from 'react'
import { Flex, Box } from 'reflexbox'

import CSSModules from 'react-css-modules'
import style from './style'

import Href from 'components/Href'
import Avatar from 'components/Avatar'

import dribbbles from '../../../dribbbles/info'


@CSSModules(style, { allowMultiple: true })
export default class InsideLayoutHeader extends React.Component {
  render() {
    const currentDribbleNum = Number(window.location.href.match(/\d+$/)[0])
    const nextVisible = currentDribbleNum != dribbbles.length

    const { name, link, author: { name: authorName, avatar, link: authorLink } } = dribbbles[currentDribbleNum - 1]

    const prevLink = currentDribbleNum == 1 ? '/' : `/dribbbles/${currentDribbleNum - 1}`


    return (
      <div styleName="container">
        <Href styleName="arrow arrowLeft" to={prevLink} />
        {
          nextVisible && (
            <Href styleName="arrow arrowRight" to={`/dribbbles/${currentDribbleNum + 1}`} />
          )
        }
        <div styleName="content">
          <Flex styleName="contentFlex" justify="space-between" align="center">
            <Box>
              <div styleName="likeThisContainer">
                <div styleName="likeThis">Like this</div>
              </div>
            </Box>
            <Box auto>
              <div styleName="nameContainer">
                <Href styleName="name" redirect={link}>{name}</Href>
              </div>
            </Box>
            <Box>
              <div styleName="authorContainer">
                <Href styleName="authorName" redirect={authorLink}>{authorName}</Href>
                <div styleName="author">author</div>
              </div>
            </Box>
            <Box>
              <div styleName="authorContainer">
                <Href redirect={authorLink}>
                  <Avatar styleName="avatar" src={avatar} size={40} circle />
                </Href>
              </div>
            </Box>
          </Flex>
        </div>
      </div>
    )
  }
}
