import React from 'react'

import CSSModules from 'react-css-modules'
import style from './style'


const Avatar = ({ children, styles, width, ...rest }) => {
  return (
    <div {...rest} styleName="container" style={{ width }}>{children}</div>
  )
}


export default CSSModules(Avatar, style)
