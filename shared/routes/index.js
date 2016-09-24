import React from 'react'
import { Route } from 'react-router'

import MainLayout from 'containers/_layouts/Main'
import InsideLayout from 'containers/_layouts/Inside'

import Home from 'containers/Home'


export default (
  <Route>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
    </Route>
    <Route component={InsideLayout}>
      
    </Route>
  </Route>
)
