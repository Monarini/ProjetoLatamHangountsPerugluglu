import store from '../store'

const selector: any = store.getState()

export function next (config: any, sco: any) {
  const { episode, sequence, mission } = config

  const states = selector.timeline
  const objectEpisode = selector.timeline[episode]
  const objectSequence = objectEpisode[sequence]
  const objectMission = objectSequence.missions

  // Nexts
  const nextMission = mission + 1
  const nextSequence = sequence + 1
  const nextEpisode = episode + 1

  store.dispatch({
    type: 'COMPLETED_MISSIONS'
  })

  store.dispatch({
    type: 'START',
    value: true
  })

  if (nextMission <= Object.keys(objectMission).length) {
    // mudar a missão
    const { onLoad } = objectMission.find((item: any) => item._id === parseInt(nextMission))

    if (onLoad) {
      const { title, message, types } = onLoad
      store.dispatch({
        type: 'NOTIFY',
        title,
        message,
        types,
        onClose: () => {
          store.dispatch({
            type: 'MISSION',
            mission: parseInt(nextMission)
          })
        }
      })
    } else {
      store.dispatch({
        type: 'MISSION',
        mission: parseInt(nextMission)
      })
    }

    if (mission !== 0) {
      store.dispatch({
        type: 'CHANGE_MISSION_CHECKED',
        mission: parseInt(mission)
      })
    }

    // Salva no scorm
    if (sco.apiConnected) {
      config.mission = config.mission + 1
      if (config.mission !== 0) sco.setSuspendData(1, JSON.stringify(config))
    }

    return true
  }

  if (nextSequence <= Object.keys(objectEpisode).length) {
    const { onLoad } = objectEpisode[nextSequence].missions.find((item: any) => item._id === 1)

    if (onLoad) {
      const { title, message, types } = onLoad
      store.dispatch({
        type: 'NOTIFY',
        title,
        message,
        types,
        onClose: () => {
          store.dispatch({
            type: 'SEQUENCE',
            sequence: nextSequence
          })
        }
      })
    } else {
      store.dispatch({
        type: 'SEQUENCE',
        sequence: nextSequence
      })
    }

    if (mission !== 0) {
      store.dispatch({
        type: 'CHANGE_MISSION_CHECKED',
        mission: parseInt(mission)
      })
    }

    // Salva no scorm
    if (sco.apiConnected) {
      config.sequence = config.sequence + 1
      config.mission = 1
      if (config.mission !== 0) sco.setSuspendData(1, JSON.stringify(config))
    }

    return true
  }

  if (nextEpisode <= Object.keys(states).length) {
    const nextEp = episode + 1
    const { onLoad } = states[nextEp][1].missions.find((item: any) => item._id === 1)

    if (onLoad) {
      const { title, message, types } = onLoad
      store.dispatch({
        type: 'NOTIFY',
        title,
        message,
        types,
        onClose: () => {
          store.dispatch({
            type: 'EPISODE',
            episode: nextEpisode
          })
        }
      })
    } else {
      store.dispatch({
        type: 'EPISODE',
        episode: nextEpisode
      })
    }

    // Salva no scorm
    if (sco.apiConnected) {
      config.episode = config.episode + 1
      config.sequence = 1
      config.mission = 1
      if (config.mission !== 0) sco.setSuspendData(1, JSON.stringify(config))
    }

    return
  }

  // finaliza tudo
  if (sco.apiConnected) {
    sco.setSuspendData(1, null)
    sco.set('cmi.core.score.raw', 100)
    sco.setStatus('passed')
  }

  if (mission !== 0) {
    store.dispatch({
      type: 'CHANGE_MISSION_CHECKED',
      mission: parseInt(mission)
    })
  }

  store.dispatch({
    type: 'START',
    value: false
  })

  store.dispatch({
    type: 'NOTIFY',
    title: 'Aviso',
    message: 'Jogo finalizado',
    types: 'primary',
    onClose: () => {
      // store.dispatch({
      //   type: 'RESET'
      // })
    }
  })

  return false
}
