const initialTopicState = {
  isFetching: false,
  topics: []
}

export default (state = initialTopicState, action) => {
  switch (action.type) {
    case 'CHANGE_TOPIC_FETCHING_STATE':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'FETCHED_TOPICS':
      return {
        ...state,
        topics: action.payload
      }
    default:
      return state
  }
}
