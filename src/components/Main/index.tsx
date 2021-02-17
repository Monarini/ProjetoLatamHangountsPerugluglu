import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withScorm } from 'react-scorm-provider'

import { Container, Content } from './styles'

import Header from '../Header'
import Jumbotron from '../Jumbotron'
import Chat from '../Chat'
import Phonecall from '../Phonecall'
import Videocall from '../Videocall'
import Tutorial from '../Tutorial'
import Notify from '../Notify'

import { next } from '../../services/Controller'

const Main: React.FC = (props: any) => {
  const config = useSelector((state: any) => state.configs)
  const dispatch = useDispatch()

  const handleModerniz = useCallback(() => {
    if (document.querySelector('.moderniz.active')) {
      if (props.sco.apiConnected) {
        props.sco.set('cmi.core.score.raw', 0)
        props.sco.setStatus('incomplete')
      }

      dispatch({
        type: 'CHANGE_TUTORIAL_MODAL',
        value: false
      })
      dispatch({
        type: 'CHAT',
        id: 6
      })
      dispatch({
        type: 'FLYOUT',
        flyout: 'messages'
      })

      // @ts-ignore
      teste('teste')

      setTimeout(() => {
        next(config, props.sco)
      }, 500)
    }
  }, [])

  return (
    <Container>
      <Header />
      <Content>
        {props.children}
      </Content>

      <Jumbotron />

      {config.flyout === 'messages' && <Chat />}
      {config.flyout === 'audios' && <Phonecall />}
      {config.flyout === 'videos' && <Videocall />}

      <Tutorial/>
      <Notify />
      {config.tutorialModal &&
        <ul className="moderniz">
          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-bottom-right">
              <h2>Progresso</h2>
              <p>Mostra em qual ponto o jogador está no curso.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-bottom-right">
              <h2>Missões</h2>
              <p>Mostra todos os objetivos do jogador.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-top">
              <h2>Visualização</h2>
              <p>Neste campo o jogador pode interagir com as notificações.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-right">
              <h2>Mensagem</h2>
              <p>Neste campo serão apresentadas todas as interações do treinamento em formato de conversa.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-right">
              <h2>Ligação</h2>
              <p>Neste campo o jogador tem acesso as ligações.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-right">
              <h2>Vídeo Chamada</h2>
              <p>Neste campo o jogador tem acesso as chamadas de vídeo.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-right">
              <h2>Notificações</h2>
              <p>Clique em &quot;nova mensagem&quot; para visualizar a mensagem.</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>

          <li className="cd-single-point">
            <a className="cd-img-replace" onClick={handleModerniz}>More</a>
            <div className="cd-more-info cd-right">
              <h2>Menu</h2>
              <p>Menu</p>
              <a className="cd-close-info cd-img-replace">Close</a>
            </div>
          </li>
        </ul>
      }
    </Container>
  )
}

export default withScorm()(Main)
