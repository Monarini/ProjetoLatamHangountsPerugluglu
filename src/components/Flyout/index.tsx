import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  Container,
  Heading,
  Content,
  Minimize,
  Maximize,
  Close,
  IconChat,
} from './styles'

interface FlyoutProps {
  name: string
  minimize: () => void
  toggle: boolean
  close: boolean
  type?: string
  children: React.ReactNode
}

const Flyout: React.FC<FlyoutProps> = ({
  name,
  minimize,
  close,
  toggle,
  type,
  children,
}: FlyoutProps) => {
  const dispatch = useDispatch()

  const handleCloseFlyout = useCallback(() => {
    if (!close) {
      dispatch({
        type: 'NOTIFY',
        title: 'Aviso',
        message:
          'Você precisa finalizar essa missão para fechar essa janela',
        types: 'primary'
      })
      return
    }
    dispatch({
      type: 'FLYOUT',
      flyout: null,
    })
  }, [close, dispatch])

  return (
    <Container className={`${type} ${toggle ? '' : 'minimized'}`}>
      <Heading>
        <div className="d-flex align-items-center">
          <IconChat className={type} />
          {name}
        </div>
        <div className="d-flex">
          <Minimize onClick={minimize} />
          <Close onClick={handleCloseFlyout} />
        </div>
        <Maximize className={toggle ? 'active' : ''} onClick={minimize} />
      </Heading>
      <Content className={toggle ? 'active' : ''}>{children}</Content>
    </Container>
  )
}

export default Flyout
