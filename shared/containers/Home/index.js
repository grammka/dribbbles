import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import style from './style'

import dribbles from '../dribbbles/info'


@CSSModules(style)
export default class Home extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="cards">
          {
            dribbles.map(({ name, desc, preview, link }, index) => (
              <div key={index} styleName="cardContainer">
                <Link styleName="card" to={`/dribbbles/${index + 1}`}>
                  <div styleName="cardPreview" style={{ backgroundImage: `url(${preview})` }}></div>
                  <div styleName="cardContent">
                    <div styleName="cardTitle">{name}</div>
                    <div styleName="cardDesc">{desc}</div>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}
