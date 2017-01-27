export const fetchCluster = () => (dispatch, getState) => {

  const { isFetching } = getState().cluster
  if (isFetching) return

  dispatch({type: 'CHANGE_CLUSTER_FETCHING_STATE', payload: true})
  return fetch(API_URL + '/api/v1/clusters')
    .then(response => response.json())
    .then(json => {
      dispatch({type: 'CHANGE_CLUSTER_FETCHING_STATE', payload: false})
      dispatch({type: 'FETCHED_CLUSTER', payload: json.data})
    })

}
