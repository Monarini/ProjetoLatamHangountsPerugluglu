import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Container, Nav, Icon, Navbar, Overlay } from './styles'

import State from '../../state.json'

export default function Navigate () {
  const [visibleNavbar, setVisibleNavbar] = useState(false)
  const config = useSelector((state: any) => state.configs)

  return (
    <Container>
      <Nav>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item" onClick={() => setVisibleNavbar(!visibleNavbar)}>
            <Icon width="24px" height="24px">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
            </Icon>
          </li>
          <NavLink className="nav-item" to="/contact" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </Icon>
          </NavLink>
          <NavLink className="nav-item" to="/direct" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </Icon>
          </NavLink>
          <NavLink className="nav-item" to="/phonecall" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </Icon>
          </NavLink>
          <NavLink className="nav-item" to="/videocall" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </Icon>
          </NavLink>
        </ul>
      </Nav>

      <Navbar className={visibleNavbar ? 'active' : ''}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item nav-brand">
            <img src="https://ssl.gstatic.com/images/icons/material/product/1x/hangouts_32dp.png" alt=""/>
            <h1 className="h1">Hangouts</h1>
          </li>
          <NavLink className="nav-item" to="/contact" activeClassName="active">
            <Icon className="active" width="24px" height="24px">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
            </Icon>
            <span>Contatos</span>
          </NavLink>
          <NavLink className="nav-item" to="/direct" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z" />
            </Icon>
            <span>Conversas</span>
          </NavLink>
          <NavLink className="nav-item" to="/phonecall" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </Icon>
            <span>Chamadas telefônicas</span>
          </NavLink>
          <NavLink className="nav-item" to="/videocall" activeClassName="active">
            <Icon width="24px" height="24px">
              <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
            </Icon>
            <span>Chamadas de vídeo</span>
          </NavLink>
        </ul>

        {State.map((item, index) => (
          <div key={index} className="media list-media">

            {config.episode >= (index + 1) ? (
              <Icon width="24px" height="24px">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/>
              </Icon>
            ) : (
              <Icon width="24px" height="24px">
                <path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
              </Icon>
            )}

            {/* <Icon width="24px" height="24px">
              <path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
            </Icon> */}
            <div className="media-body">
              <strong>{item.name}</strong>
              <ul>
                {item.missions.map((mission, index2) => (
                  <li key={`${index}-${index2}`}>

                    {config.sequence_total >= mission._id ? (
                      <Icon width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </Icon>
                    ) : (
                      <Icon width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                      </Icon>
                    )}

                    {mission.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </Navbar>
      <Overlay className={visibleNavbar ? 'active' : ''} onClick={() => setVisibleNavbar(!visibleNavbar)} />
    </Container>
  )
}
