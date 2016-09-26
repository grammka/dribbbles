import React from 'react'
import { Flex, Box } from 'reflexbox'

import CSSModules from 'react-css-modules'
import style from './style'

import Href from 'components/Href'
import Avatar from 'components/Avatar'

import dribbles from '../dribbbles/info'


@CSSModules(style)
export default class Home extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="title">Dribbbles from <Href redirect="http://dribbble.com">dribbble.com</Href> I converted to HTML</div>

        <div styleName="cards">
          {
            dribbles.map((dribbble, index) => {
              const { name, preview, link, author: { name: authorName, avatar, link: authorLink } } = dribbble

              return (
                <div key={index} styleName="cardContainer">
                  <div styleName="card">
                    <Href
                      styleName="cardPreview"
                      style={{ backgroundImage: `url(${preview})` }}
                      to={`/dribbbles/${index + 1}`}
                    />
                    <div styleName="cardContent">
                      <Flex align="center">
                        <Box>
                          <Href styleName="cardAuthorAvatar" redirect={authorLink}>
                            <Avatar src={avatar} size={50} circle />
                          </Href>
                        </Box>
                        <Box>
                          <Href styleName="cardTitle" redirect={link}>{name}</Href>
                          <div styleName="cardAuthorNameContainer">
                            by <Href styleName="cardAuthorName" redirect={authorLink}>{authorName}</Href>
                          </div>
                        </Box>
                      </Flex>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
