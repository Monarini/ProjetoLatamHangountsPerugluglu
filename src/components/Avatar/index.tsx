import React from 'react'

import { Container, Image } from './styles'

export default function Avatar ({ type, image, ...rest }: any) {
  return (
    <Container {...rest}>
      <Image className={type} src={image || 'cc'} />
    </Container>
  )
}
