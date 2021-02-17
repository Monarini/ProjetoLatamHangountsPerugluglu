import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Dropdown, DropdownToggle, DropdownMenu, ListGroup, ListGroupItem } from 'reactstrap'
import { Container, Heading, Content, Icon } from './styles'

import Mission from './Mission'

import target from '../../../assets/target.png'

export default function Missions () {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { episode, sequence, missions, start } = useSelector((state: any) => state.configs)
  const dispatch = useDispatch()

  const myMissions = useSelector((state: any) => state.timeline[episode][sequence].missions)
    .map((item: any) => {
      if (missions.actived.indexOf(item._id) !== -1) {
        return {
          ...item,
          active: true
        }
      }
      return {
        ...item,
        active: false
      }
    }).map((item: any) => {
      if (missions.checked.indexOf(item._id) !== -1) {
        return {
          ...item,
          checked: true
        }
      }
      return {
        ...item,
        checked: false
      }
    })

  const toggle = () => setDropdownOpen(prevState => !prevState)

  useEffect(() => {
    if (dropdownOpen) {
      dispatch({
        type: 'START',
        value: false
      })
    }
  }, [dropdownOpen])

  return (
    <Container>
      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle tag="a">
          <span className={start ? 'badge-missions active' : 'badge-missions'}>
            <Icon width="24px" height="24px" src={target} title="missions" alt=""/>
          </span>
        </DropdownToggle>
        <DropdownMenu>
          <Heading>
            Missões
          </Heading>
          <Content>
            <ListGroup flush>
              {myMissions.map((mission: any, index: number) =>
                <ListGroupItem key={index}>
                  <Mission index={index} text={mission.title} user={mission.user} type={mission.type} active={mission.active} checked={mission.checked}/>
                </ListGroupItem>
              )}
            </ListGroup>
          </Content>
        </DropdownMenu>
      </Dropdown>
    </Container>
  )
}
