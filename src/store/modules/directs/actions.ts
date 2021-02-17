import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  message: ['id', 'avatar', 'message', 'types'],
  messageVisible: ['id'],
  reset: []
})
