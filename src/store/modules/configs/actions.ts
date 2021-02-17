import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  avatar: ['avatar'],
  tutorial: ['value'],
  mission: ['mission'],
  sequence: ['sequence'],
  episode: ['episode'],
  flyout: ['flyout'],
  chat: ['id'],
  videocall: ['id'],
  phonecall: ['id'],
  change: ['data'],
  change_avatar: ['avatar'],
  completed_missions: [],
  change_mission_checked: ['mission'],
  start: ['value'],
  change_tutorial_modal: ['value']
})
