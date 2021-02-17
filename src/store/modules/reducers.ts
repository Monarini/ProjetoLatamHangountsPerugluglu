import { combineReducers } from 'redux'

import configs from './configs/reducer'
import timeline from './timeline/reducer'
import notify from './notify/reducer'
import users from './users/reducer'
import messages from './messages/reducer'
import responses from './responses/reducer'
import directs from './directs/reducer'
import videos from './videos/reducer'
import audios from './audios/reducer'

export default combineReducers({
  configs,
  timeline,
  notify,
  users,
  messages,
  responses,
  directs,
  videos,
  audios
})
