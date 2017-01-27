import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import cluster from './cluster'
import broker from './broker'
import brokerMetrics from './broker-metrics'
import topic from './topic'

export default combineReducers({
  routing: routerReducer,
  cluster,
  broker,
  brokerMetrics,
  topic
})
