import React from 'react'

import { Media, CustomInput } from 'reactstrap'
import { Container, Icon } from './styles'

import call from '../../../../assets/call.svg'
import videocam from '../../../../assets/videocam.svg'
import chat from '../../../../assets/chat.svg'

const icons: any = {
  call,
  videocam,
  chat
}

export default function Mission ({ index, text, user, type, active = false, checked = false }: any) {
  return (
    <Container className={active ? 'active' : ''}>
      <Media className="align-items-center">
        <Icon src={icons[type]} width="24px" height="24px" />
        <Media body className="d-flex align-items-center justify-content-between">
          <span className="px-3">{text} <strong className="d-block">{user}</strong></span>
          <CustomInput type="checkbox" id={index} checked={checked} readOnly />
        </Media>
      </Media>
    </Container>
  )
}
