import React from 'react'
import Image from 'components/Image'

import noAvatarImg from './images/no-avatar.jpg'


const Avatar = ({ styles, src, ...rest }) => {
  return (
    <Image {...rest} src={src || noAvatarImg} />
  )
}


export default Avatar
