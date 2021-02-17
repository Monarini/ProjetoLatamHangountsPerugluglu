import React, { useState, useEffect, useCallback, useRef } from 'react'
import { withScorm } from 'react-scorm-provider'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Settings, Content, Icon } from './styles'

import Flyout from '../Flyout'

import { getUsers } from '../../services/Users'
import { next } from '../../services/Controller'

interface User {
  _id: number
  avatar: string
  data: string
  name: string
}

const Phonecall: React.FC = (props: any) => {
  const [close, setClose] = useState(false)
  const [toggle, setToggle] = useState(true)

  const config = useSelector((state: any) => state.configs)
  const user: User = getUsers(config.phonecall)

  const audio = useSelector((state: any) => state.audios)
    .find((audio: any) => config.episode && config.sequence && config.mission && audio.user === user._id)

  const audioRef = useRef<any>(null)
  const dispatch = useDispatch()

  const handleClosPhonecall = useCallback(() => {
    if (!config.flyoutClose) {
      dispatch({
        type: 'NOTIFY',
        title: 'Aviso',
        message: 'Você precisa finalizar essa missão para fechar essa janela',
        types: 'primary'
      })
      return
    }
    dispatch({
      type: 'FLYOUT',
      flyout: null
    })
  }, [dispatch, config.flyoutClose])

  useEffect(() => {
    if (audioRef) {
      audioRef.current.play()

      audioRef.current.onended = () => {
        setClose(true)
        next(config, props.sco)
      }
    }
  }, [audioRef, setClose])

  return (
    <Container>
      <Flyout name={user.name} minimize={() => setToggle(!toggle)} close={close} toggle={toggle} type="phone">
        <Settings>

        </Settings>
        <Content>
          <Icon width="24px" height="24px">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </Icon>
          <button type="button" title="Encerrar ligação" onClick={handleClosPhonecall}>Encerrar ligação</button>

          {audio && <audio src={audio.src} ref={audioRef} controls></audio>}
        </Content>
      </Flyout>
    </Container>
  )
}

export default withScorm()(Phonecall)
