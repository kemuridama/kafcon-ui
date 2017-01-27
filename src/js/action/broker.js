export const fetchBrokers = () => (dispatch, getState) => {

  const { isFetching } = getState().broker
  if (isFetching) return

  dispatch({type: 'CHANGE_BROKER_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/brokers')
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_BROKER_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_ALL_BROKERS', payload: json.data})
    })

}

export const fetchBroker = (id) => (dispatch, getState) => {

  const { isFetching } = getState().broker
  if (isFetching) return

  dispatch({type: 'CHANGE_BROKER_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/brokers/' + id)
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_BROKER_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_BROKER', payload: json.data})
    })

}
