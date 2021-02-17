import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import Main from '../components/Main'

import Contact from '../pages/Contact'
import Direct from '../pages/Direct'
import Phonecall from '../pages/Phonecall'
import Videocall from '../pages/Videocall'
import Login from '../pages/Login'

export default function Routes () {
  return (
    <HashRouter>
      <Switch>
        <Redirect from="/" to="/login" exact />
        <Route path="/login" component={Login} />
        <Main>
          <Route component={({ match }: any) =>
            <div>
              <Route path='/contact' component={Contact} />
              <Route path='/direct' component={Direct} />
              <Route path='/phonecall' component={Phonecall} />
              <Route path='/videocall' component={Videocall} />
            </div>
          }/>
        </Main>
      </Switch>
    </HashRouter>
  )
}
