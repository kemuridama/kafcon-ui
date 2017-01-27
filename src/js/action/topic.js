export const fetchTopics = () => (dispatch, getState) => {

  const { isFetching } = getState().topic
  if (isFetching) return

  dispatch({type: 'CHANGE_TOPIC_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/topics')
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_TOPIC_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_TOPICS', payload: json.data})
    })

}

export const fetchTopic = (name) => (dispatch, getState) => {

  const { isFetching } = getState().topic
  if (isFetching) return

  dispatch({type: 'CHANGE_TOPIC_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/topics/' + name)
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_TOPIC_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_TOPIC', payload: json.data})
    })

}
