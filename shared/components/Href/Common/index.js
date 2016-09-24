import React from 'react'
import { Link } from 'react-router'

import CSSModules from 'react-css-modules'
import style from './style'


const Href = ({ styles, children, to, redirect, mailto, ...rest }) => {
  if (to) {
    return (
      <Link
        {...rest}
        styleName="link"
        to={to}
      >
        {children}
      </Link>
    )
  }
  else if (redirect) {
    return (
      <a
        styleName="link"
        href={redirect}
        target="_blank"
        rel="noopener noreferrer nofollow"
        {...rest}
      >
        {children}
      </a>
    )
  }
  else if (mailto) {
    return (
      <a
        {...rest}
        styleName="link"
        href={`mailto:${mailto}`}
      >
        {children}
      </a>
    )
  }
  else {
    throw new Error('Href error: missed param `to` or `redirect`')
  }
}

export default CSSModules(Href, style)
