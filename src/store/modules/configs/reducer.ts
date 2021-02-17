// @ts-nocheck

import { createReducer } from 'reduxsauce'

import { INITIAL_STATE } from './state'

import { Types as MyTypes } from './actions'

const changeAvatarPlayer = (state = INITIAL_STATE, { avatar }) => {
  return ({
    ...state,
    avatar
  })
}

const changeTutorial = (state = INITIAL_STATE, { value }) => {
  return ({
    ...state,
    tutorial: value
  })
}
const changeTutorialModal = (state = INITIAL_STATE, { value }) => {
  return ({
    ...state,
    tutorialModal: value
  })
}

const changeMission = (state = INITIAL_STATE, { mission }) => {
  return ({
    ...state,
    mission,
    missions: {
      ...state.missions,
      actived: [
        ...state.missions.actived,
        mission
      ]
    }
  })
}

const changeMissionChecked = (state = INITIAL_STATE, { mission }) => {
  return ({
    ...state,
    missions: {
      ...state.missions,
      checked: [
        ...state.missions.checked,
        mission
      ]
    }
  })
}

const changeSequence = (state = INITIAL_STATE, { sequence }) => {
  return ({
    ...state,
    sequence,
    sequence_total: state.sequence_total + 1,
    mission: 1,
    missions: {
      checked: [0],
      actived: [1]
    }
  })
}

const changeEpisode = (state = INITIAL_STATE, { episode }) => {
  return ({
    ...state,
    episode,
    mission: 1,
    sequence: 1,
    sequence_total: state.sequence_total + 1,
    missions: {
      checked: [0],
      actived: [1]
    }
  })
}

const changeFlyout = (state = INITIAL_STATE, { flyout }) => {
  return ({
    ...state,
    flyout,
    flyoutClose: false
  })
}

const changeChat = (state = INITIAL_STATE, { id }) => {
  return ({
    ...state,
    chat: id
  })
}

const changeVideo = (state = INITIAL_STATE, { id }) => {
  return ({
    ...state,
    videocall: id
  })
}

const changePhonecall = (state = INITIAL_STATE, { id }) => {
  return ({
    ...state,
    phonecall: id
  })
}

const change = (state = INITIAL_STATE, { data }) => {
  return ({
    ...data
  })
}

const changeAvatar = (state = INITIAL_STATE, { avatar }) => {
  return ({
    ...state,
    avatar
  })
}

const completedMissions = (state = INITIAL_STATE) => {
  return ({
    ...state,
    completedMissions: state.completedMissions + 1
  })
}

const changeStart = (state = INITIAL_STATE, { value }) => {
  return ({
    ...state,
    start: value
  })
}

export default createReducer(INITIAL_STATE, {
  [MyTypes.AVATAR]: changeAvatarPlayer,
  [MyTypes.TUTORIAL]: changeTutorial,
  [MyTypes.MISSION]: changeMission,
  [MyTypes.SEQUENCE]: changeSequence,
  [MyTypes.EPISODE]: changeEpisode,
  [MyTypes.FLYOUT]: changeFlyout,
  [MyTypes.CHAT]: changeChat,
  [MyTypes.VIDEOCALL]: changeVideo,
  [MyTypes.PHONECALL]: changePhonecall,
  [MyTypes.CHANGE]: change,
  [MyTypes.CHANGE_AVATAR]: changeAvatar,
  [MyTypes.CHANGE_MISSION_CHECKED]: changeMissionChecked,
  [MyTypes.CHANGE_TUTORIAL_MODAL]: changeTutorialModal,
  [MyTypes.COMPLETED_MISSIONS]: completedMissions,
  [MyTypes.START]: changeStart
})
