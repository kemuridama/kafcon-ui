const initialBrokerState = {
  isFetching: false,
  brokers: []
}

export default (state = initialBrokerState, action) => {
  switch (action.type) {
    case 'CHANGE_BROKER_FETCHING_STATE':
      return {
        ...state,
        isFetching: action.payload
      }
    case 'FETCHED_ALL_BROKERS':
      return {
        ...state,
        brokers: action.payload
      }
    case 'FETCHED_BROKER':
      return {
        ...state,
        brokers: state.brokers.filter(x => x.id != action.payload.id).concat([action.payload])
      }
    default:
      return state
  }
}
