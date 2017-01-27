const initialClusterState = {
  isFetching: false,
  name: 'Kafka Cluster',
  brokers: [],
  topics: [],
  zookeepers: [],
  partitionCount: 0,
  messageCount: 0
}

export default (state = initialClusterState, action) => {
  switch (action.type) {
    case 'CHANGE_CLUSTER_FETCHING_STATE':
      return {
        ...state,
        ifFetching: action.payload
      }
    case 'FETCHED_CLUSTER':
      return {
        ...state,
        name: action.payload.name,
        brokers: action.payload.brokers,
        topics: action.payload.topics,
        zookeepers: action.payload.zookeepers,
        partitionCount: action.payload.partitionCount,
        messageCount: action.payload.messageCount
      }
    default:
      return state
  }
}
