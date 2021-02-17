import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { withScorm } from 'react-scorm-provider'
import { useDispatch } from 'react-redux'
import Swiper from 'react-id-swiper'
import 'swiper/css/swiper.css'

import { Nav, NavItem } from 'reactstrap'
import { Container, Heading, Content, Logo, ImageEmail } from './styles'

import logo from '../../assets/logo.png'
import email1 from '../../assets/email_1.png'
import email2 from '../../assets/email_2.png'
import email3 from '../../assets/email_3.png'
import avatar1 from '../../assets/avatars/avatar1.png'
import avatar2 from '../../assets/avatars/avatar2.png'
import avatar3 from '../../assets/avatars/avatar3.png'
import avatar4 from '../../assets/avatars/avatar4.png'
import avatar5 from '../../assets/avatars/avatar5.png'

import Avatar from '../../components/Avatar'

const Login: React.FC = (props: any) => {
  const history = useHistory()
  const [swiper, setSwiper]: any = useState()
  const [initial, setInitial] = useState(false)
  const [avatar, setAvatar] = useState()
  const dispatch = useDispatch()

  if (props.sco.apiConnected) {
    if (!initial) {
      props.sco.getSuspendData()
        .then((response: any) => {
          if (response[1]) {
            const data = JSON.parse(response[1])

            dispatch({
              type: 'CHANGE',
              data: data
            })

            if (data.avatar) {
              setTimeout(() => {
                history.push('/contact')
              }, 100)
            }
          }
        })
        .catch((err: any) => console.log(err))

      setInitial(true)
    }
  }

  const params = {
    effect: 'fade',
    slidesPerView: 1,
    autoHeight: true,
    touchRatio: false
  }

  function goNextSwiper () {
    if (swiper !== null) swiper.slideNext()
  }

  function handleChangeAvatar (image: any) {
    setAvatar(image)
    dispatch({
      type: 'CHANGE_AVATAR',
      avatar: image
    })
  }

  return (
    <Container>
      <Swiper getSwiper={setSwiper} {...params}>
        <section>
          <Content className="card">
            <div className="card-body">
              <Heading>
                <Logo src={logo} />
                <h1 className="h4">Escolha seu avatar</h1>
                <div className="my-4">Este espaço é seu. Selecione uma imagem do seu gosto:</div>
              </Heading>

              <Nav className="my-5 justify-content-between">
                <NavItem>
                  <Avatar className={avatar === avatar1 ? 'active' : ''} onClick={() => handleChangeAvatar(avatar1)} image={avatar1} type="md" />
                </NavItem>
                <NavItem>
                  <Avatar className={avatar === avatar2 ? 'active' : ''} onClick={() => handleChangeAvatar(avatar2)} image={avatar2} type="md" />
                </NavItem>
                <NavItem>
                  <Avatar className={avatar === avatar3 ? 'active' : ''} onClick={() => handleChangeAvatar(avatar3)} image={avatar3} type="md" />
                </NavItem>
                <NavItem>
                  <Avatar className={avatar === avatar4 ? 'active' : ''} onClick={() => handleChangeAvatar(avatar4)} image={avatar4} type="md" />
                </NavItem>
                <NavItem>
                  <Avatar className={avatar === avatar5 ? 'active' : ''} onClick={() => handleChangeAvatar(avatar5)} image={avatar5} type="md" />
                </NavItem>
              </Nav>
              <div className="text-center">
                <button className="btn btn-light" onClick={goNextSwiper}>Avançar</button>
              </div>
            </div>
          </Content>
        </section>
        <section>
          <Content className="card card-lg">
            <div className="card-body">
              <Heading>
                <Logo src={logo} />
                <h1 className="h4">Vamos começar então?</h1>
                <div className="my-4">Você deve ter recebido um e-mail semelhante a este abaixo.
                Clique no link dentro da caixa amarela para entrar no curso.</div>
              </Heading>
              <ImageEmail src={email1} className="img-fluid mt-2"/>
              <ImageEmail src={email2} className="img-fluid hover" onClick={() => history.push('/direct')} alt=""/>
              <ImageEmail src={email3} className="img-fluid"/>
            </div>
          </Content>
        </section>
      </Swiper>
    </Container>
  )
}

export default withScorm()(Login)
