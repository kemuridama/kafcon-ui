export const fetchAllBrokerMetrics = () => (dispatch, getState) => {

  const { isFetching } = getState().brokerMetrics
  // if (isFetching) return

  dispatch({type: 'CHANGE_BROKER_METRICS_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/brokers/metrics')
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_BROKER_METRICS_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_ALL_BROKER_METRICS', payload: json.data})
    })

}

export const fetchBrokerMetrics = (id) => (dispatch, getState) => {

  const { isFetching } = getState().brokerMetrics
  // if (isFetching) return

  dispatch({type: 'CHANGE_BROKER_METRICS_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/brokers/' + id + '/metrics')
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_BROKER_METRICS_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_BROKER_METRICS', payload: json.data})
    })

}

export const fetchCombinedBrokerMetrics = () => (dispatch, getState) => {

  const { isFetching } = getState().brokerMetrics
  // if (isFetching) return

  dispatch({type: 'CHANGE_BROKER_METRICS_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/brokers/metrics/combined')
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_BROKER_METRICS_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_COMBINED_BROKER_METRICS', payload: json.data})
    })

}
