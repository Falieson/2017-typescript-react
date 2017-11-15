import * as React from 'react'
import { Route, Switch } from 'react-router-dom'

import AsyncAboutRoute from './AsyncAboutRoute'
import AsyncCounterRoute from './AsyncCounterRoute'
import AsyncHomeRoute from './AsyncHomeRoute'
import Error404 from './Error404'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={AsyncHomeRoute} />
      <Route path="/counter" component={AsyncCounterRoute} />
      <Route path="/about" component={AsyncAboutRoute} />
      <Route component={Error404} />
    </Switch>
  )
}
