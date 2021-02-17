import { createStore } from 'redux'

import reducers from './modules/reducers'

const store = createStore(reducers)

export default store
