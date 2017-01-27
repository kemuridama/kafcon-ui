import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import reducers from './reducer'

import Kafcon from './component/kafcon'
import DashboardPage from './component/page/dashboard'
import BrokerSummaryPage from './component/page/broker-summary'
import BrokerPage from './component/page/broker'
import ErrorPage from './component/page/error'

const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={'/'} component={Kafcon}>
        <IndexRoute component={DashboardPage} />
        <Route path={'brokers'} component={BrokerSummaryPage} />
        <Route path={'brokers/:id'} component={BrokerPage} />
        <Route path={'*'} component={ErrorPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
