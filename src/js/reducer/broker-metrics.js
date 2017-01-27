const initialBrokerMetricsState = {
  isFetching: false,
  combinedMetrics: null,
  metrics: []
}

export default (state = initialBrokerMetricsState, action) => {
  switch (action.type) {
    case 'CHANGE_BROKER_METRICS_FETCHING_STATE':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'FETCHED_ALL_BROKER_METRICS':
      return {
        ...state,
        metrics: action.payload
      }
    case 'FETCHED_BROKER_METRICS':
      return {
        ...state,
        metrics: state.metrics.filter(x => x.brokerId != action.payload.brokerId).concat([action.payload])
      }
    case 'FETCHED_COMBINED_BROKER_METRICS':
      return {
        ...state,
        combinedMetrics: action.payload
      }
    default:
      return state
  }
}
