import React, { useState } from 'react'
import { withScorm } from 'react-scorm-provider'
import Swiper from 'react-id-swiper'
import { useSelector, useDispatch } from 'react-redux'

import Modal from '../Modal'

import { Item } from './styles'

const Tutorial: React.FC = (props: any) => {
  const [setSwiper]: any = useState(null)

  const config = useSelector((state: any) => state.configs)

  const dispatch = useDispatch()

  const params = {
    effect: 'fade',
    slidesPerView: 1,
    autoHeight: true,
    touchRatio: false
  }
  function handleVisible () {
    if (props.sco.apiConnected) {
      props.sco.set('cmi.core.score.raw', 0)
      props.sco.setStatus('incomplete')
    }
    dispatch({
      type: 'TUTORIAL',
      value: false
    })
    dispatch({
      type: 'CHANGE_TUTORIAL_MODAL',
      value: true
    })

    // setTimeout(() => {
    //   next(config, props.sco)
    //   dispatch({
    //     type: 'TUTORIAL',
    //     value: false
    //   })
    // }, 500)
  }

  return config.tutorial && (
    <Modal>
      <Swiper getSwiper={setSwiper} {...params}>
        <Item>
          <h3>Tutorial</h3>
          <p> Este é um simulador do já conhecido <strong>Google Hangouts</strong>, cujo objetivo é ensinar sobre a prevenção de incêndio de aeronaves. </p>

          <p>Você é nesse momento um(a) comissário(a) que está se preparando para um treinamento.</p>

          <button className="swiper-next swiper-button" onClick={handleVisible}>Começar</button>
        </Item>
      </Swiper>
    </Modal>
  )
}

export default withScorm()(Tutorial)
