import React, { useState, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Media, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Container, Actions, Date, Icon, ClickOpenFlyout } from './styles'

import Avatar from '../../components/Avatar'

interface MediaUserProps {
  name: string
  data: string
  avatar: string
  user: number
  type: string
  active?: boolean
  text: string
}

const MediaUser: React.FC<MediaUserProps> = ({ name, data, avatar, user, type, active, text }: MediaUserProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { episode, sequence, mission } = useSelector((state: any) => state.configs)

  const isPermitionOpenFlyout = useSelector((state: any) => state[type].find((item: any) => item.episode === episode && item.sequence === sequence && item.mission === mission && item.chat === user))

  // const isPermitionOpenFlyout = false
  const dispatch = useDispatch()

  const handleOpenFlyout = useCallback(() => {
    if (!isPermitionOpenFlyout) {
      dispatch({
        type: 'NOTIFY',
        title: 'Aviso',
        message: 'Sem permissão',
        types: 'primary'
      })
      return
    }

    const types: any = {
      messages: 'CHAT',
      videos: 'VIDEOCALL',
      audios: 'PHONECALL'
    }

    dispatch({
      type: types[type],
      id: user
    })

    dispatch({
      type: 'FLYOUT',
      flyout: type
    })
  }, [dispatch, user, type, isPermitionOpenFlyout])

  const toggle = () => setDropdownOpen(prevState => !prevState)

  return (
    <Container>
      <ClickOpenFlyout onClick={handleOpenFlyout} />
      <Media className={`align-items-center ${dropdownOpen ? 'active' : ''} ${active ? 'hover' : ''}`}>
        <div className={`badge-message ${active ? 'active' : ''}`}>
          <Avatar image={avatar} type="ms" />
        </div>
        <Media body className="ml-3 d-flex align-items-center justify-content-between">
          <div>
            <span className="name">{name}</span>
            {active && <span className="text">{text}</span>}
          </div>
          <Actions>
            <Date>{data}</Date>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle tag="a">
                <Icon width="24" height="24">
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                </Icon>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Arquivar</DropdownItem>
                <DropdownItem>Excluir</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Actions>
        </Media>
      </Media>
    </Container>
  )
}

export default MediaUser
