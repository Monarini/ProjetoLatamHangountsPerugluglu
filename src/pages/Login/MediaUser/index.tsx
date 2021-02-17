import React from 'react'

import { Media } from 'reactstrap'
import { Container } from './styles'

import Avatar from '../../../components/Avatar'

interface MediaUserProps {
  name: string
  avatar: string
}

const MediaUser: React.FC<MediaUserProps> = ({ name, avatar }: MediaUserProps) => {
  return (
    <Container>
      <Media className="align-items-center">
        <Avatar image={avatar} type="sm" />
        <Media body className="ml-3 d-flex align-items-center justify-content-between">
          <span className="name">{name}</span>
          <small className="small">Desconectado</small>
        </Media>
      </Media>
    </Container>
  )
}

export default MediaUser
