import React, { useState, useEffect, useCallback } from 'react'
import renderHTML from 'react-render-html'
import Swiper from 'react-id-swiper'
import { useSelector, useDispatch } from 'react-redux'

import 'swiper/css/swiper.css'

import { Container, Item, Message } from './styles'

export default function Response ({ data: { callback, id, messages, responses = [] }, scroll }: any) {
  const params = {
    slidesPerView: 1,
    autoHeight: false,
    pagination: {
      el: '.swiper-pagination'
    }
  }
  const [swiper, setSwiper]: any = useState()
  const config = useSelector((state: any) => state.configs)
  const resposta = useSelector((state: any) => state.responses.filter((response: any) => responses.indexOf(response._id) !== -1))

  const dispatch = useDispatch()

  const handleResponse = useCallback(async (response: any) => {
    dispatch({
      type: 'MESSAGE',
      id,
      avatar: config.avatar,
      types: 'default',
      message: response.message
    })
    setTimeout(() => {
      scroll()
    }, 10)

    if (response.callback) {
      response.callback(callback, messages)
      return
    }

    callback(messages)
  }, [callback, config.avatar, dispatch, messages, scroll])

  useEffect(() => {
    if (swiper) {
      swiper.update()
      swiper.slideTo(0, 0)
    }
  }, [resposta, swiper])

  return (
    <Container className={(resposta.length > 0) ? 'hasAnswer' : ''}>
      <Swiper getSwiper={setSwiper} {...params}>
        {resposta && resposta.map((response: any) =>
          <Item key={response._id}>
            <Message onClick={() => handleResponse(response)}>
              {renderHTML(response.message)}
            </Message>
          </Item>
        )}
      </Swiper>
    </Container>
  )
}
