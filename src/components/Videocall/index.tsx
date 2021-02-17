import React, { useState, useEffect, useCallback, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Container, Settings, Content } from './styles'

import Flyout from '../Flyout'

import { getUsers } from '../../services/Users'

interface User {
  _id: number
  avatar: string
  data: string
  name: string
}

export default function Videocall () {
  const [close, setClose] = useState(false)
  const [toggle, setToggle] = useState(true)

  const config = useSelector((state: any) => state.configs)
  const user: User = getUsers(config.videocall)
  const video = useSelector((state: any) => state.videos)
    .find((video: any) => config.episode && config.sequence && config.mission && video.user === user._id)

  const videoRef = useRef<any>(null)
  const dispatch = useDispatch()

  const handleCloseVideocall = useCallback(() => {
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
    if (videoRef) {
      videoRef.current.play()

      videoRef.current.onended = () => {
        setClose(true)
        console.log('Acabou o vídeo')
      }
    }
  }, [videoRef, setClose])

  return (
    <Container>
      <Flyout name={user.name} minimize={() => setToggle(!toggle)} close={close} toggle={toggle} type="video">
        <Settings>

        </Settings>
        <Content>
          {video && <video src={video.src} ref={videoRef} controls></video>}
          <button type="button" title="Encerrar ligação" onClick={handleCloseVideocall}>Encerrar ligação</button>
        </Content>
      </Flyout>
    </Container>
  )
}
