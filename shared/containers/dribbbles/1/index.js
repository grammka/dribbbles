import React from 'react'
import { Flex, Box } from 'reflexbox'
import Icon from 'react-fa'

import CSSModules from 'react-css-modules'
import style from './style'

import Avatar from 'components/Avatar'


@CSSModules(style)
export default class Dribbble_1 extends React.Component {
  static defaultProps = {
    cards: [
      {
        author: {
          name: 'James Black',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/felipenogs/128.jpg',
          speechCount: 10
        },
        title: '"Actively selling". A peppery spirit and motivational speeches to achieve...',
        desc: 'Smth here',
        cost: 146,
        status: 'top',
        messageCount: 100,
        likeCount: 520,
        styles: {
          backgroundColor: '#8826d6'
        }
      },
      {
        author: {
          name: 'Niles Orval',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg',
          speechCount: 10
        },
        title: '"Actively selling". A peppery spirit and motivational speeches to achieve...',
        desc: 'Smth here',
        cost: 146,
        status: null,
        messageCount: 100,
        likeCount: 520,
        styles: {
          backgroundColor: '#2471e4'
        }
      },
      {
        author: {
          name: 'Elizabeth Willson',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg',
          speechCount: 10
        },
        title: '"Actively selling". A peppery spirit and motivational speeches to achieve...',
        desc: 'Smth here',
        cost: 146,
        status: null,
        messageCount: 100,
        likeCount: 520,
        styles: {
          backgroundColor: '#ff133e'
        }
      },
      {
        author: {
          name: 'Royal Kennard',
          avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/vladzima/128.jpg',
          speechCount: 10
        },
        title: '"Actively selling". A peppery spirit and motivational speeches to achieve...',
        desc: 'Smth here',
        cost: 146,
        status: null,
        messageCount: 100,
        likeCount: 520,
        styles: {
          backgroundColor: '#ff9900'
        }
      },
    ]
  }

  render() {
    const { cards } = this.props


    return (
      <div styleName="container">
        <div styleName="cards">
          {
            cards.map((card, index) => {
              const { author, title, desc, cost, status, messageCount, likeCount, styles } = card
              const { name: authorName, avatar, speechCount } = author

              return (
                <div key={index} styleName="cardContainer">
                  <div styleName="card" style={styles}>
                    <Flex justify="space-between" align="center">
                      <Box>
                        <Avatar styleName="avatar" src={avatar} size={42} circle />
                      </Box>
                      <Box auto>
                        <div styleName="cardAuthorName">{authorName}</div>
                        <div styleName="cardSpeechCount">{speechCount} speech</div>
                      </Box>
                      <Box>
                        <div styleName="cardCost">{`${cost} kr`}</div>
                      </Box>
                    </Flex>
                    <div styleName="cardContent">
                      <div styleName="cardTitle">{title}</div>
                      <div styleName="cardDesc">{desc}</div>
                    </div>
                    <div styleName="cardFooter">
                      <Flex justify="space-between" align="center">
                        <Box>
                          {
                            status && (
                              <div styleName="status">{status}</div>
                            )
                          }
                        </Box>
                        <Box>
                          <div styleName="statsContainer">
                            <Flex>
                              <Box>
                                <div styleName="stats">
                                  {messageCount}
                                  <Icon name="commenting-o" />
                                </div>
                              </Box>
                              <Box>
                                <div styleName="statsPipe"></div>
                              </Box>
                              <Box>
                                <div styleName="stats">
                                  {likeCount}
                                  <Icon name="heart-o" />
                                </div>
                              </Box>
                            </Flex>
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
