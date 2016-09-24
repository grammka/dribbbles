import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


const Image = (props) => {
  const circle    = props.circle
  const size      = props.s || props.size
  const width     = props.w || props.width
  const height    = props.h || props.height

  let containerStyleName = 'container'
  const style = {}

  if (size) {
    style.width = size
    style.height = size
  } else {
    containerStyleName += ' square'
  }

  if (width) {
    style.width = width
  }

  if (height) {
    style.height = height
  }

  if (circle) {
    style.borderRadius = '50%'
  }

  return (
    <div className={props.className} styleName={containerStyleName} style={style}>
      <img styleName="image" src={props.src} />
    </div>
  )
}


export default CSSModules(Image, style, { allowMultiple: true })
