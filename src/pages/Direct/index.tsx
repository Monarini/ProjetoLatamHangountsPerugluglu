import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Button, ButtonCircle, ButtonIcon } from './styles'

import UserMedia from '../../components/UserMedia'

interface UserProps {
  _id: number
  name: string
  data: string
  avatar: string
  direct: boolean
}

const Direct: React.FC = () => {
  const { episode, sequence, mission } = useSelector((state: any) => state.configs)
  const users = useSelector((state: any) => state.users)
  const messages = useSelector((state: any) => state.messages)
  return (
    <Container>
      <Button>
        <ButtonCircle>
          <ButtonIcon width="24px" height="24px">
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
          </ButtonIcon>
        </ButtonCircle>
        <span>Nova conversa</span>
      </Button>
      {users && users.filter((user: UserProps) => user.direct).map((user: UserProps) => {
        const active = (messages.find((message: any) =>
          message.episode === episode && message.sequence === sequence && message.mission === mission && message.chat === user._id)
        )

        return <UserMedia key={user._id} name={user.name} data={user.data} avatar={user.avatar} user={user._id} active={!!active} text="Nova mensagem" type="messages" />
      })}
    </Container>
  )
}

export default Direct
