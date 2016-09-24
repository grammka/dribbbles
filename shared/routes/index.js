import React from 'react'
import { Route } from 'react-router'

import MainLayout from 'containers/_layouts/Main'
import InsideLayout from 'containers/_layouts/Inside'

import Home from 'containers/Home'
import dribbles from 'containers/dribbbles'


export default (
  <Route>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/dribbbles" component={Home} />
    </Route>
    <Route component={InsideLayout}>
      {
        dribbles.map((dribble, index) => (
          <Route key={index} path={`/dribbbles/${index + 1}`} component={dribble} />
        ))
      }
    </Route>
  </Route>
)
