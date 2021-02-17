import React, { useState, useEffect, useCallback, useRef } from 'react'
import { withScorm } from 'react-scorm-provider'
import { useSelector, useDispatch } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'

import { Container, Settings, Messages, Responses } from './styles'

import Flyout from '../Flyout'
import Message from '../Message'
import Response from '../Response'

import { getUsers } from '../../services/Users'
import { next } from '../../services/Controller'

interface User {
  _id: number
  avatar: string
  data: string
  name: string
}

const Chat: React.FC = (props: any) => {
  const [close, setClose] = useState(false)
  const [toggle, setToggle] = useState(true)
  const [responses, setResponses] = useState([])

  const config = useSelector((state: any) => state.configs)
  const user: User = getUsers(config.chat)
  const direct = useSelector((state: any) => state.directs[user._id])
  const messages = useSelector((state: any) => state.messages)

  const { avatar } = config

  const scrollRef = useRef<Scrollbars | null>(null)

  const dispatch = useDispatch()

  const handleScrollBottom = useCallback(() => {
    // @ts-ignore
    scrollRef.current.scrollToBottom()
  }, [])

  const handleMessages = useCallback(
    (mgs: any) => {
      setResponses([])
      const message = mgs.shift()

      if (!message) {
        // Finalizou
        next(config, props.sco)
        setClose(true)
        return
      }
      const userChat: User = getUsers(message.user)
      setTimeout(
        () => {
          // Enviar a mensagem para o direct.
          const messageType =
            message.type === 'response' ? 'default' : 'primary'
          const messageAvatar =
            message.type === 'response' ? avatar : userChat.avatar
          dispatch({
            type: 'MESSAGE',
            id: message.chat,
            avatar: messageAvatar,
            types: messageType,
            message: message.message
          })
          setTimeout(() => {
            handleScrollBottom()
          }, 10)

          setTimeout(() => {
            // Mostra a mensagem no direct.
            dispatch({
              type: 'MESSAGE_VISIBLE',
              id: message.chat
            })
            setTimeout(() => {
              handleScrollBottom()
            }, 10)

            // Chama o callback da mensagem.
            if (message.callback) {
              message.callback(handleMessages, mgs)
              if (!message.response || message.response.length <= 0) return
            }

            // Chama as respostas para o usuário.
            if (message.response && message.response.length >= 1) {
              setResponses({
                // @ts-ignore
                callback: handleMessages,
                messages: mgs,
                responses: message.response,
                id: message.chat
              })
              return
            }

            // Executa próxima mensagem.
            handleMessages(mgs)
          }, message.delay)
        },
        message.delay !== 0 ? 1000 : 0
      )
    },
    [avatar, config, dispatch, user._id, handleScrollBottom]
  )

  useEffect(() => {
    handleScrollBottom()

    const { episode, sequence, mission } = config
    const state = messages.filter(
      (message: any) =>
        message.episode === episode &&
        message.sequence === sequence &&
        message.mission === mission &&
        message.chat === user._id
    )

    if (state.length !== 0) {
      handleMessages(state)
      setClose(false)
    }
  }, [messages, user._id, config.episode, config.sequence, config.mission])

  return (
    <Container>
      <Flyout
        name={user.name}
        minimize={() => setToggle(!toggle)}
        close={close}
        toggle={toggle}
        type="chat"
      >
        <Settings></Settings>
        <Messages>
          <Scrollbars className="scroll" ref={scrollRef}>
            {direct && direct.map((item: any, index: number) => (
              <Message
                key={index}
                image={item.avatar}
                type={item.types}
                visible={item.visible}
              >
                {item.message}
              </Message>
            ))}
          </Scrollbars>
        </Messages>
        <Responses>
          <Response data={responses} scroll={handleScrollBottom} />
        </Responses>
      </Flyout>
    </Container>
  )
}

export default withScorm()(Chat)
