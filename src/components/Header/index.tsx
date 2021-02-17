import React from 'react'
import { Container, HeaderRight } from './styles'

import Profile from './Profile'
import Missions from './Missions'
import Navigate from '../Navigate'

export default function Header () {
  return (
    <Container className="navbar">
      <div className="navbar-brand">
        <img src="https://www.gstatic.com/chat/hangouts/hangouts_watermark_2x_605177f5b0189bd3199b55a8709495ae.png" height="24px" alt=""/>
      </div>

      <Navigate />

      <HeaderRight>
        <Missions />
        <Profile />
      </HeaderRight>
    </Container>
  )
}
