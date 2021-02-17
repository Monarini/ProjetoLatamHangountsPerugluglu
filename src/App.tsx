import React from 'react'
import ScormProvider from 'react-scorm-provider'
import { Provider } from 'react-redux'

import store from './store'
import Routes from './routes'
import GlobalStyle from './styles'

export default function App () {
  return (
    <ScormProvider>
      <Provider store={store}>
        <Routes />
        <GlobalStyle />
      </Provider>
    </ScormProvider>
  )
}
