import React from 'react'

import { Container, Overlay, Wrapper } from './styles'

export default function Modal ({ children }: any) {
  return (
    <Container>
      <Overlay />
      <Wrapper>
        {children}
      </Wrapper>
    </Container>
  )
}
