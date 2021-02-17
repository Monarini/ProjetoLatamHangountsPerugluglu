import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector } from 'react-redux'

import { Container, Overlay, Wrapper, Heading, Content, Button } from './styles'

export default function Notify () {
  const [visible, setVisible] = useState(false)

  const notify = useSelector((state: any) => state.notify)
  const didMountRef = useRef(false)

  const handleClose = useCallback(() => {
    visible && setVisible(false)
    if (notify.onClose) notify.onClose()
  }, [visible, setVisible, notify])

  useEffect(() => {
    if (didMountRef.current) {
      if (notify.onLoad) notify.onLoad()
      setVisible(true)
    } else didMountRef.current = true
  }, [notify])

  return (
    <Container className={`notify.types ${visible ? 'active' : ''}`}>
      <Overlay />
      <Wrapper className={visible ? 'active' : ''}>
        {notify.title && <Heading className="heading">{notify.title}</Heading>}
        <Content className="content">{notify.message}</Content>
        <Button className="actions" onClick={() => handleClose()}>Ok</Button>
      </Wrapper>
    </Container>
  )
}
