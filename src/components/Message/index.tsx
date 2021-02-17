import React from 'react'
import renderHTML from 'react-render-html'

import Avatar from '../Avatar'
import { Container, Content } from './styles'

export default function Message ({ image, type, visible, children }: any) {
  return (
    <Container className={visible ? `active ${type}` : type}>
      <Avatar image={image} type="sm" />
      <Content>
        <div className="loading">
          <span className="loading-dots"></span>
          <span className="loading-dots"></span>
          <span className="loading-dots"></span>
        </div>

        <div className="content">
          {renderHTML(children)}
        </div>
      </Content>
    </Container>
  )
}
