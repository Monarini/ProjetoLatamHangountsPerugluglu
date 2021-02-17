import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { Dropdown, DropdownToggle, DropdownMenu, Progress } from 'reactstrap'
import { Container, Heading, Content } from './styles'

import Avatar from '../../../components/Avatar'
import avatar1 from '../../../assets/avatars/avatar1.png'

export default function Profile () {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [courseProgress, setCourseProgress] = useState(0)

  const configs = useSelector((state: any) => state.configs)

  const toggle = () => setDropdownOpen(prevState => !prevState)

  useEffect(() => {
    const _progress = (configs.completedMissions * 100) / configs.totalMissions
    setCourseProgress(_progress)
  }, [configs.completedMissions, configs.totalMissions])

  return (
    <Container>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle tag="a">
          <Avatar type="sm" image={configs.avatar || avatar1} />
        </DropdownToggle>
        <DropdownMenu>
          <Heading>
            Perfil
          </Heading>
          <Content>
            <span className="d-block text-center mt-4">Progresso geral do curso</span>
            <Progress value={courseProgress} />
          </Content>
        </DropdownMenu>
      </Dropdown>
    </Container>
  )
}
