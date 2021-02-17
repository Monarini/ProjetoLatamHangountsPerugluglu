// @ts-nocheck

import { createReducer } from 'reduxsauce'

import { Types } from './actions'
import { INITIAL_STATE } from './state'

const message = (state = INITIAL_STATE, { id, avatar, message, types }) => ({
  ...state,
  [id]: [
    ...state[id],
    {
      avatar,
      message,
      types,
      visible: false
    }
  ]
})

const visible = (state = INITIAL_STATE, { id }) => ({
  ...state,
  [id]: [
    ...state[id].map(message => (message.visible === false) ? { ...message, visible: true } : message)
  ]
})

const reset = () => ({
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: []
})

export default createReducer(INITIAL_STATE, {
  [Types.MESSAGE]: message,
  [Types.MESSAGE_VISIBLE]: visible,
  [Types.RESET]: reset
})
