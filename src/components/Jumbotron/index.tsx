import React from 'react'

import { Container, Actions, ActionItem, ActionCircle, ActionCaption } from './styles'

function Jumbotron () {
  return (
    <Container>
      <h1>Olá, Anderson!</h1>
      <h2>Para começar, ligue ou envie uma mensagem para um amigo abaixo.</h2>
      <Actions>

        <ActionItem to="/videocall">
          <ActionCircle>
            <svg width="24px" height="24px">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"></path>
            </svg>
          </ActionCircle>
          <ActionCaption>Videochamada</ActionCaption>
        </ActionItem>

        <ActionItem to="/phonecall">
          <ActionCircle>
            <svg width="24px" height="24px">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
            </svg>
          </ActionCircle>
          <ActionCaption>Chamada telefônica</ActionCaption>
        </ActionItem>

        <ActionItem to="/direct">
          <ActionCircle>
            <svg width="24px" height="24px">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"></path>
            </svg>
          </ActionCircle>
          <ActionCaption>Mensagem</ActionCaption>
        </ActionItem>
      </Actions>
    </Container>
  )
}

export default Jumbotron
